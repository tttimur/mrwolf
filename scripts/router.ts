import Navigo from 'navigo'
import axios from 'axios'

import { enterHomepage, fadeInContentMain, enterPage, fadeOutContent, openHeader, fadeInContentHomepage } from './animations';
import { closeHeader } from './animations';
import { setupMiscFuncs } from './misc'

let requestedUrl: string = null
let tempEl = null
let router

function setupRoutes (router: Navigo) {
  router.on('/*', function () {

  }, {
    before: routerBeforeFunc
  })
  // router.on('/mrwolf/', function (e) {
  //   },
  //   {before: routerHomepageFunc}
  // )
  // router.on('/mrwolf/contact', function (e) {}, { before: routerBeforeFunc })
  // router.on('/mrwolf/reservations', function (e) {}, { before: routerBeforeFunc })
  // router.on('/mrwolf/events', function (e) {}, { before: routerBeforeFunc })
  // router.on('/mrwolf/venue', function (e) {}, { before: routerBeforeFunc })
  // router.on('/mrwolf/contact/submitted', function (e) {}, { before: routerBeforeFunc })
  // router.on('/mrwolf/reservations/bottle-service-submitted', function (e) {}, { before: routerBeforeFunc })
  // router.on('/mrwolf/reservations/submitted', function (e) {}, { before: routerBeforeFunc })
}

// function routerHomepageFunc (done) {
//   fadeOutContent()
  
//   setTimeout(() => {
//     makePageRequest(requestedUrl, done, true)
//     openHeader()
//   }, 1000)
// }

function routerBeforeFunc (done) {
  console.log(router, 'router')
  console.log(window.location.pathname, ' PATHNAME!')

  /// this is homepage specific event
  if (window.location.pathname === '/mrwolf' || window.location.pathname === '/mrwolf/') {
    fadeOutContent()
    if (window.innerWidth < 680) closeHeader()

    setTimeout(() => {
      makePageRequest(requestedUrl, done, true)

      if (window.innerWidth > 680) openHeader()
    }, 400)
  } else {

    // this is nonhome page router event
    closeHeader()
    fadeOutContent()
    setTimeout(() => {
      makePageRequest(requestedUrl, done, false)
    }, 400)
  }

}

function makePageRequest (url: string, done: any, fromIndex: boolean) {
  axios.get(url)
  .then(res => {
    const data: string = res.data
    // const parsedData: object = JSON.parse(data)
    tempEl = document.createElement('div')
    tempEl.innerHTML = data

    const requestedMainContent = tempEl.querySelector('main')
    document.body.setAttribute('data-page', requestedMainContent.getAttribute('id'))

    replaceMainContent(requestedMainContent, fromIndex)
    done()
  })
  .catch(err => {
    // setup error handler? 
    // either refresh the page or try again?
    console.log(err, 'ERROR')
  })
}

function replaceMainContent (mainContent: Element, fromIndex: boolean) {
  document.querySelector('main').remove()
  document.body.appendChild(mainContent)

  if (fromIndex) fadeInContentHomepage()
  else fadeInContentMain()
  
  setupMiscFuncs()
}

function addEventListeners (router: Navigo) {  
  window.onpopstate = e => {
    requestedUrl = document.location.href
  }

  // prevent hrefs from navigating, use internal router
  document.querySelectorAll('[data-navigation]').forEach(el => {
    const location: string = el.getAttribute('href')
    el.addEventListener('click', e => {
      e.preventDefault()
      requestedUrl = location
      router.navigate(location, true)
    })
  })
}

function initRouter () {
  router = new Navigo(null, false, false)

  setupRoutes(router)
  addEventListeners(router)
  setupMiscFuncs()

  if (window.location.pathname === '/mrwolf/') {
    document.body.setAttribute('data-page', 'page-homepage')

    if (window.innerWidth > 680) openHeader()
    fadeInContentHomepage()
  } else {
    fadeInContentMain()
  }

  console.log(router, ' router')
}

export default initRouter
