<template>
  <div class="flex flex-col items-center pt-[70px] pb-[200px]">
    <div
      class="lg:content-w lt-lg:w-[calc(100%-40px)] lg:mx-auto gap-[5px] relative"
      id="image-container"
    ></div>
  </div>
</template>

<script lang="tsx" setup>
import { render } from 'vue'
import gsap from 'gsap'
import { images } from '@/utils/photo'

let imageContainer: null | HTMLElement = null,
  widthOfImage = 0,
  gap = 5,
  lineArr: number[] = [],
  mdImages: string[] = [],
  rowNum = 3,
  imageNodes: Node[] = []

onMounted(() => {
  rowNum = window.innerWidth < 992 ? 2 : 3

  mdImages = images.value.map(url => {
    const arr = url.split('.')
    const suffix = arr.pop()
    const name = arr.join('.')
    return `${name}.md.${suffix}`
  })

  imageContainer = document.getElementById('image-container')
  if (imageContainer) {
    widthOfImage = (imageContainer.offsetWidth - gap * (rowNum - 1)) / rowNum
    initImage()
  }

  // listen window resize
  window.addEventListener('resize', () => {
    rowNum = window.innerWidth < 992 ? 2 : 3
    widthOfImage = (imageContainer!.offsetWidth - gap * (rowNum - 1)) / rowNum
    lineArr = []
    imageNodes.forEach((node, index) => {
      const element = node as HTMLElement
      const withRowNum = index % rowNum
      element.style.width = `${widthOfImage}px`
      element.style.left = `${withRowNum * (widthOfImage + gap)}px`
      element.style.top = `${lineArr[withRowNum] || 0}px`
      const img = element.querySelector('img') as HTMLImageElement
      const height = img.height * (widthOfImage / img.width)
      lineArr[withRowNum] = (lineArr[withRowNum] || 0) + height + gap
      imageContainer!.style.height = `${Math.max(...lineArr)}px`
    })
  })
})

const initImage = () => {
  mdImages.forEach((url, index) => {
    const withRowNum = index % rowNum

    const div = document.createElement('div')
    div.style.width = `${widthOfImage}px`
    div.style.position = 'absolute'
    div.style.left = `${withRowNum * (widthOfImage + gap)}px`
    imageNodes.push(div)

    gsap.from(div, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: index * 0.15,
      scrollTrigger: div,
    })

    const img = new Image()
    img.src = url
    img.onload = () => {
      const height = img.height * (widthOfImage / img.width)
      div.style.top = `${lineArr[withRowNum] || 0}px`
      lineArr[withRowNum] = (lineArr[withRowNum] || 0) + height + gap
      imageContainer!.style.height = `${Math.max(...lineArr)}px`
    }
    render(<ImageNode src={url} />, div)
  })
  imageContainer!.append(...imageNodes)
}

function ImageNode({ src }: { src: string }) {
  return (
    <div class="flex">
      <img src={src} class="w-full h-full rounded-sm" />
    </div>
  )
}
</script>
