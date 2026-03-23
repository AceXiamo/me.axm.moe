<template>
  <NuxtLayout>
    <NuxtPage :transition="pageTransition" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import gsap from 'gsap'

const pageTransition = {
  name: 'page',
  mode: 'out-in' as const,
  onBeforeEnter(el: Element) {
    gsap.set(el, { autoAlpha: 0, y: 12 })
  },
  onEnter(el: Element, done: () => void) {
    gsap.to(el, {
      autoAlpha: 1,
      y: 0,
      duration: 0.35,
      ease: 'power2.out',
      onComplete: done,
    })
  },
  onBeforeLeave(el: Element) {
    gsap.set(el, { autoAlpha: 1 })
  },
  onLeave(el: Element, done: () => void) {
    gsap.to(el, {
      autoAlpha: 0,
      y: -12,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: done,
    })
  },
}
</script>
