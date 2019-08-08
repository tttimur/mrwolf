import { TweenMax, Power2, CSSPlugin } from 'gsap/TweenMax'
import Siema from 'siema'

let ss = null
export function initSlideshows () {
  if (ss) ss.destroy()

  const siemaEl = document.querySelector('.siema')

  if (siemaEl) {
    const prevArrow = document.querySelector('.arrow-left')
    const nextArrow = document.querySelector('.arrow-right')
    
    ss = new Siema({
      selector: '.siema',
      easing: 'ease-out',
      duration: 400,
      onChange: updateArrowVisiblity
    })

    function updateArrowVisiblity () {
      const parent = siemaEl.parentElement
      parent.classList.remove('initial-spot')
      parent.classList.remove('end-spot')

      if (ss.currentSlide === 0) parent.classList.add('initial-spot')
      else if (ss.currentSlide === ss.innerElements.length - 1) parent.classList.add('end-spot')
    }
    
    prevArrow.addEventListener('click', () => {
      ss.prev(1)
    })
    nextArrow.addEventListener('click', () => {
      ss.next(1)
    })
  }
}

export function handleReservations () {
  const reservations = document.querySelectorAll('.reservation')

  reservations.forEach(res => {
    const resHeader = res.querySelector('.reservation-header')
    if (!resHeader) return false

    resHeader.addEventListener('click', () => {
      const resoContent = res.querySelector('.reservation-content')


      if (!res.className.includes('closed')) {
        TweenMax.to(resoContent, 0.3, { height: 0 })
        res.classList.add('closed')
      } else {

        closeRemainingResos()

        TweenMax.set(resoContent, { height: 'auto'})
        TweenMax.from(resoContent, 0.5, { height: 0 })
        res.classList.remove('closed')
      }

    })
  })

  function closeRemainingResos () {
    reservations.forEach(res => {
      const resHeader = res.querySelector('.reservation-header')
      const resoContent = res.querySelector('.reservation-content')

      if (!resHeader) return false

      if (!res.className.includes('closed')) {
        TweenMax.to(resoContent, 0.3, { height: 0 })
        res.classList.add('closed')
      }
    })
  }
}



export function handleSubmissionEvents () {
  document.removeEventListener('wpcf7mailsent', handleSubmissionItself);
  document.addEventListener('wpcf7mailsent', handleSubmissionItself, false);
  console.log('handling submissionss..........')
}

function handleSubmissionItself (e) {
  if ('70' == event.detail.contactFormId) {
    window.location.href = 'https://1234.56.digital/mrwolf/contact/submitted'
    // router.navigate('http:\/\/localhost:8888/mrwolf/contact/submitted')
  }
}

let headerEffectsInitialized: boolean = false
function handleHeaderHoverEffect () {
  const navLinks = document.querySelectorAll('nav a')
  const blueMoon = document.getElementById('bluemoon')
  
  if (!headerEffectsInitialized) {
    blueMoon.addEventListener('click', () => {
      blueMoon.innerHTML = 'Coming soon'
      setTimeout(() => {
        blueMoon.innerHTML = 'Blue moon'
      }, 1000)

    })
    blueMoon.addEventListener('mouseenter', () => {
      blueMoon.innerHTML = 'Coming soon'
    })
    blueMoon.addEventListener('mouseleave', () => {
      blueMoon.innerHTML = 'Blue moon'
    })
    
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(link => {
          link.classList.remove('unselected')
        })
      })

      link.addEventListener('mouseenter', () => {
        navLinks.forEach(link => {
          link.classList.add('unselected')
        })
        
        link.classList.remove('unselected')
      })

      link.addEventListener('mouseleave', () => {
        navLinks.forEach(link => {
          link.classList.remove('unselected')
        })
      })
    })

    headerEffectsInitialized = true
  }
}

export function setupMiscFuncs () {
  handleHeaderHoverEffect()
  initSlideshows()
  handleReservations()
  handleSubmissionEvents()
}

