import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Animations
const counters = document.querySelectorAll('[data-counter]')
const animationElems = document.querySelectorAll('[data-anim]')
const header = document.querySelector('header')

if (counters.length) {
  gsap.set(counters, { textContent: 0 })
}
if (animationElems.length) {
  gsap.set(animationElems, { opacity: 0, y: 100 })
}
if (header) {
  gsap.set(header, { opacity: 0 })
}

if (window.innerWidth >= 768) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#scene-1',
      start: 'bottom bottom',
      end: 1000,
      pin: true,
      scrub: true,
    },
  })

  tl.to('#scroll-image', {
    maxWidth: '100%',
  })
}

// Loader
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('[data-loader]').classList.add('hidden')
    gsap.to(header, {
      opacity: 1,
      duration: 2,
      ease: 'power4.out',
    })
  }, 500)
})

function animateCounter() {
  gsap.to(counters, {
    textContent: (indx, el) => el.dataset.counter,
    duration: 2,
    ease: 'expo.out',
    snap: { textContent: 1 },
  })
}
function animateFadeInElem(el) {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power4.out',
  })
}
function animateStagerElem(el) {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    delay: 0.5,
    ease: 'power4.out',
  })
}

// Observers
const projects = document.querySelector('#projects')
const animationStagerContainers = document.querySelectorAll(
  '[data-anim-container="stager"]'
)
const animationStartStagerContainers = document.querySelectorAll(
  '[data-anim-container="start-stager"]'
)
const animationFadeInContainers = document.querySelectorAll(
  '[data-anim-container="fade-in"]'
)

const projectsObserver = new IntersectionObserver(
  (entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter()
        observe.unobserve(projects)
      }
    })
  },
  { rootMargin: '0px 0px -300px 0px', threshold: 0 }
)
const animationContainerStartStagerObserver = new IntersectionObserver(
  (entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStagerElem(entry.target.querySelectorAll('[data-anim]'))
        observe.unobserve(entry.target)
      }
    })
  },
  { threshold: 0 }
)
const animationContainerStagerObserver = new IntersectionObserver(
  (entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStagerElem(entry.target.querySelectorAll('[data-anim]'))
        observe.unobserve(entry.target)
      }
    })
  },
  { threshold: 0 }
)
const animationContainerFadeInObserver = new IntersectionObserver(
  (entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateFadeInElem(entry.target.querySelector('[data-anim]'))
        observe.unobserve(entry.target)
      }
    })
  },
  { threshold: 0 }
)

if (projects) {
  projectsObserver.observe(projects)
}

if (animationStartStagerContainers.length) {
  animationStartStagerContainers.forEach((container) => {
    animationContainerStartStagerObserver.observe(container)
  })
}
if (animationStagerContainers.length) {
  animationStagerContainers.forEach((container) => {
    animationContainerStagerObserver.observe(container)
  })
}
if (animationFadeInContainers.length) {
  animationFadeInContainers.forEach((container) => {
    animationContainerFadeInObserver.observe(container)
  })
}
