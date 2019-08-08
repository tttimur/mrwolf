import { TweenMax, Power2, CSSPlugin } from 'gsap/TweenMax'

let availableStates: string[] = [
  'LOADING',
  'LOADING_COMPLETE',
  'ENTER_HOMEPAGE',
  'EXIT_HOMEPAGE',
  'ENTER_PAGE',
  'EXIT_PAGE'
]

const header = document.querySelector('header')
const closeMenuBtn = document.getElementById('close-menu-desktop')
const openMenuBtn = document.getElementById('open-menu-desktop')
const openMenuMobileBtn = document.getElementById('open-menu-mobile')
const sidePaper = document.querySelector('.open-header-side-paper')
const mainBgEl = document.querySelector('.close-header-main-bg')

function addEventListeners () {
  closeMenuBtn.addEventListener('click', closeHeader)
  openMenuBtn.addEventListener('click', openHeader)
  openMenuMobileBtn.addEventListener('click', openHeader)
  sidePaper.addEventListener('click', openHeader)
  mainBgEl.addEventListener('click', closeHeader)
}

export function openHeader () {
  if (window.innerWidth > 760) {
    TweenMax.set('header', { y: 0 })
    TweenMax.to('header', 0.7, { x: '0' })
  } else {
    header.classList.add('open')
  }

  document.body.classList.add('header-open-highest')
  header.classList.add('desktop-open')

  document.querySelectorAll('.staggered-load').forEach((el, i) => {
    TweenMax.from(el, 0.5, { opacity: 0, x: '-100px', delay: i * 0.1 })
  })
}

export function fadeOutContent () {
  TweenMax.to('main', 0.5, {opacity: 0, y: '-100px'})
}
export function fadeInContentMain () {
  TweenMax.to('main', 0, { opacity: 1 })
  enterPage()
}
export function fadeInContentHomepage () {
  TweenMax.to('main', 1, { opacity: 1 })
}

export function closeHeader () {
  if (window.innerWidth > 680) {
    TweenMax.set('header', { y: 0 })
    TweenMax.to('header', 0.4, { x: `-${26 * 16}px` })
  } else {
    header.classList.remove('open')
  }


  document.body.classList.remove('header-open-highest')
  header.classList.remove('desktop-open')

  TweenMax.to('.staggered-load', 0.5, {opacity: 1})
}

export function enterPage () {
  closeHeader()

  // load all regular content
  document.querySelectorAll('.content-come-in').forEach((el, i) => {
    TweenMax.from(el, 0.5, { opacity: 0, y: '50px', delay: i * 0.1 })
  })

  // load in images
  document.querySelectorAll('picture').forEach((img, i) => {
    TweenMax.from(img, 0.5, { scaleY: 0, y: '100px', opacity: 0, delay: i * 0.4 })
    TweenMax.to(img.querySelector('img'), 0.5, { opacity: 1, delay: i * 0.4 + 1 })
  })

}

export function exitPage () {
  closeHeader()
}

export function enterHomepage() {
  if (window.innerWidth > 760) {
    openHeader()
  }
}

function init () {
  addEventListeners()


  document.body.classList.add('animations-initialized')

  // if (window.location.pathname === '/mrwolf/') enterHomepage()
  // else enterPage()
}

export default init
