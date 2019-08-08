import initBg from './bg.ts'
import initAnimations from './animations.ts'
import initRouter from './router.ts'


function afterBgLoadedCb () {
  initAnimations()
  initRouter()
}

initBg(afterBgLoadedCb)