import * as PIXI from 'pixi.js'
import { AdvancedBloomFilter } from '@pixi/filter-advanced-bloom';
import { Runner } from '@pixi/runner';

const bgEl = document.getElementById('background')
const loaderEl = document.getElementById('loader')
const assetRoot: string = '/mrwolf/wp-content/themes/mrwolf56/assets/landing/'

function initBg (ONLOAD_CALLBACK) {
  const loader = PIXI.Loader.shared
  
  let repeats: number = 3
  let assets: any[] = []
  let displacementSprite: any
  let displacementFilter: any
  let bloomFilter: any

  let offset: number
  
  const app = new PIXI.Application({
    width: window.innerWidth, height: window.innerHeight,
    // resolution: window.innerWidth > 640 ? 1 : window.devicePixelRatio 
  })

  const container = new PIXI.Container()
  app.renderer.resize(window.innerWidth, window.innerHeight)

  app.stop()

  bgEl.appendChild(app.view)

  function setupAssets () {
    // 0 = bg
    // 1 = mg
    // 2 = fg
    // 3 = tex1
    // 4 = tex2
    loader.add('displacement', `${assetRoot}/displacement_map_repeat.jpg`)
          .add('bg', `${assetRoot}/bg.png`)
          .add('mg', `${assetRoot}/mg.png`)
          .add('fg', `${assetRoot}/fg.png`)
          .add('tex1', `${assetRoot}/texture1.png`)
          // .add('tex2', `${assetRoot}/texture2.png`)
          .add('tex2', `${assetRoot}/texture2JPG.jpg`)

    loader.load((loader, resources) => {

      // bloomFilter = new AdvancedBloomFilter()
      // bloomFilter.scale = 4
      // bloomFilter.pixelSize = 4

      // const noiseFilter = new PIXI.filters.NoiseFilter()
      // noiseFilter.noise = 0.08
      // console.log(bloomFilter)

      // displacementSprite = PIXI.Sprite.from(`${assetRoot}/displacement_map_repeat.jpg`)
      displacementSprite = new PIXI.Sprite(resources.displacement.texture)
      displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT
      displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite)
      displacementFilter.padding = 10
      displacementFilter.position = 0
      app.stage.addChild(displacementSprite)

      assets[0] = new PIXI.Sprite(resources.bg.texture)
      assets[1] = new PIXI.Sprite(resources.mg.texture)
      assets[2] = new PIXI.Sprite(resources.fg.texture)

      assets[3] = new PIXI.Sprite(resources.tex1.texture)
      assets[3].blendMode = PIXI.BLEND_MODES.MULTIPLY

      assets[4] = new PIXI.Sprite(resources.tex2.texture)
      assets[4].blendMode = PIXI.BLEND_MODES.SCREEN
      assets[4].alpha = 0.7

      for (var i: number = 0; i <= assets.length - 1; i++) {
        // assets[i].anchor.set(0.5)
        assets[i].texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT
        container.addChild(assets[i])
      }

      displacementFilter.scale.x = 150
      displacementFilter.scale.y = 1

      // assets[2].filters = [displacementFilter]
      // assets[3].filters = [bloomFilter]
      // assets[0].filters = [displacementFilter]

      // assets[2].filters = [displacementFilter]
      // container.filters = [displacementFilter]
      app.stage.addChild(container)
    // assets[1].filters = [displacementFilter]
    // assets[1].filters = [displacementFilter]
    // assets[0].filters = [displacementFilter]

    })

    loader.onComplete.add(() => {
      setupSizes(0)
      app.start()

      run()

      setTimeout(function () {
        ONLOAD_CALLBACK()
      }, 3000)

      loaderEl.classList.add('dispose')


      bgEl.classList.add('loaded')

      app.renderer.plugins.interaction.mouse.global.y = 0.2
      app.renderer.plugins.interaction.mouse.global.x = 0.2
    })
  }

  let timer: number = 0
  function run () {
    app.ticker.add(() => {
      timer++

      const normalizedX: number = app.renderer.plugins.interaction.mouse.global.x / window.innerWidth * 2 - 1
      const normalizedY: number = app.renderer.plugins.interaction.mouse.global.y / window.innerHeight * 2 - 1
      const move: number = Math.sin(timer / 3000)

      displacementFilter.scale.x = normalizedX * 100
      // displacementFilter.scale.y = normalizedY ? normalizedY * 20 : 1
      displacementFilter.scale.y = normalizedY ? normalizedY * 80 : 1

      for (var i: number = 0; i <= assets.length - 1; i++) {
        assets[i].position.x = move * (i + 1) * (normalizedX * 40) * Math.cos(timer / 100) - 200

        // assets[i].transform.position.y = assets[i].setupPositionY + (i + 1) * (normalizedY * 2) * 3 * Math.cos(timer / 70) + 20
        assets[i].transform.position.y = assets[i].setupPositionY + (i + 1) * Math.cos(timer / 100) * (normalizedY * 2) * 2

        // console.log(assets[i], 'assets')
        // assets[i].position.x -= 1
      }

      displacementSprite.x += 0.4;
      // Reset x to 0 when it's over width to keep values from going to very huge numbers.
      if (displacementSprite.x > displacementSprite.width) { displacementSprite.x = 0; }
    })
  }

  function resize () {
    app.renderer.resize(window.innerWidth, window.innerHeight)
    setupSizes(0)
  }

  function setupSizes (offset: number) {
    // assets[0].width = 1209 * 1.1
    // assets[0].height = 877 * 1.1
    for (var i: number = 0; i <= assets.length - 1; i++) {
      assets[i].scale.set((window.innerWidth + 200) / (assets[i].texture.width / 1.2))
      assets[i].position.y = 0
      // assets[i].position.y = assets[i]z/.position.y + offset
      // assets[i].scale.set(window.innerWidth / window.innerHeight + (i / 10))
    }

    assets[4].scale.set((window.innerWidth + 200) / (assets[4].texture.width / 1.8))
    assets[3].scale.set((window.innerWidth + 200) / (assets[4].texture.width / 1.8))
    
    assets[0].position.y = -600
    assets[3].position.y = -50
    assets[4].position.y = -50
    assets[1].position.y = window.innerHeight - assets[1].height - 100
    assets[2].position.y = window.innerHeight - assets[2].height

    assets[0].height = assets[0].height + 10

    for (var i: number = 0; i <= assets.length - 1; i++) {
      assets[i].setupPositionY = assets[i].transform.position.y
      console.log(assets[i].texture.baseTexture, 'console.log uhhhuh')
    }
  }


  setupAssets()

  window.addEventListener('resize', resize)
}

export default initBg