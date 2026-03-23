import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.defaults({
  duration: 0.5,
  ease: 'power2.out',
})

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook('page:transition:finish', () => {
    ScrollTrigger.refresh()
  })
})
