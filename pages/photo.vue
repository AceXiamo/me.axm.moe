<template>
  <div class="flex flex-col items-center pt-[70px] pb-[200px]">
    <div class="lg:content-w lt-lg:w-[calc(100%-40px)] lg:mx-auto gap-[5px] relative" id="image-container"></div>
  </div>
</template>

<script lang="tsx" setup>
import { render } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { images } from '@/utils/photo'
import imageViewer from '~/utils/imageViewer'
import BuncingBall from '~/assets/images/buncing-ball.svg'
import { sleep } from '~/utils'

let imageContainer: null | HTMLElement = null,
  widthOfImage = 0,
  gap = 5,
  lineArr: number[] = [],
  mdImages: string[] = [],
  rowNum = 3,
  imageNodes: HTMLElement[] = []

onMounted(() => {
  rowNum = window.innerWidth < 992 ? 2 : 3

  mdImages = images.value.map(item => {
    const arr = item.url.split('.')
    const suffix = arr.pop()
    const name = arr.join('.')
    return `${name}.md.${suffix}`
  })

  imageContainer = document.getElementById('image-container')
  if (imageContainer) {
    widthOfImage = (imageContainer.offsetWidth - gap * (rowNum - 1)) / rowNum
    initImage()
  }

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  ScrollTrigger.getAll().forEach(t => t.kill())
})

const handleResize = () => {
  rowNum = window.innerWidth < 992 ? 2 : 3
  widthOfImage = (imageContainer!.offsetWidth - gap * (rowNum - 1)) / rowNum
  lineArr = []
  imageNodes.forEach((node, index) => {
    const withRowNum = index % rowNum
    node.style.width = `${widthOfImage}px`
    node.style.left = `${withRowNum * (widthOfImage + gap)}px`
    node.style.top = `${lineArr[withRowNum] || 0}px`
    const img = node.querySelector('img') as HTMLImageElement
    const height = img.height * (widthOfImage / img.width)
    lineArr[withRowNum] = (lineArr[withRowNum] || 0) + height + gap
    imageContainer!.style.height = `${Math.max(...lineArr)}px`
  })
  ScrollTrigger.refresh()
}

const initImage = () => {
  mdImages.forEach((url, index) => {
    const withRowNum = index % rowNum

    const div = document.createElement('div')
    div.style.width = `${widthOfImage}px`
    div.style.position = 'absolute'
    div.style.left = `${withRowNum * (widthOfImage + gap)}px`
    div.classList.add('photo-item')
    imageNodes.push(div)

    gsap.set(div, { autoAlpha: 0, y: 40 })

    const img = new Image()
    img.src = url
    img.onload = () => {
      const height = img.height * (widthOfImage / img.width)
      div.style.top = `${lineArr[withRowNum] || 0}px`
      lineArr[withRowNum] = (lineArr[withRowNum] || 0) + height + gap
      imageContainer!.style.height = `${Math.max(...lineArr)}px`
      ScrollTrigger.refresh()
    }
    render(<ImageNode src={url} index={index} />, div)
  })
  imageContainer!.append(...imageNodes)

  ScrollTrigger.batch('.photo-item', {
    onEnter: (elements) => {
      gsap.to(elements, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
        overwrite: true,
      })
    },
    start: 'top 90%',
    once: true,
  })
}

function ImageNode({ src, index }: { src: string; index: number }) {
  return (
    <div class="flex relative overflow-hidden rounded-sm group cursor-pointer">
      <img
        src={src}
        class="w-full h-full transition-transform duration-500 group-hover:scale-105"
        onClick={(e: Event) => handleView(index, e)}
      />
    </div>
  )
}

const handleView = (index: number, e: Event) => {
  if (images.value[index].full_loaded) {
    imageViewer.show(images.value[index].url, e)
  } else {
    const el = (e.currentTarget || e.target) as HTMLElement
    const parent = el.parentElement as HTMLElement
    const div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.inset = '0'
    parent.append(div)
    render(<ImageLoading />, div)
    gsap.from(div, { autoAlpha: 0, duration: 0.2 })

    const img = new Image()
    img.src = images.value[index].url
    Promise.all([sleep(1000), img.onload]).then(() => {
      images.value[index].full_loaded = true
      gsap.to(div, {
        autoAlpha: 0,
        duration: 0.15,
        onComplete: () => {
          imageViewer.show(images.value[index].url, e)
          div.remove()
        },
      })
    })
  }
}

function ImageLoading() {
  return (
    <div class="flex flex-col bg-black/20 absolute inset-0 items-center justify-center">
      <img class="w-[40px] h-[40px] object-cover" src={BuncingBall} />
      <span class="text-[12px] mt-[10px] text-white">加载原图中</span>
    </div>
  )
}
</script>
