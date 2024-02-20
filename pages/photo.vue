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

let imageContainer: null | HTMLElement = null,
  widthOfImage = 0,
  gap = 5,
  lineArr: number[] = [],
  mdImages: string[] = [],
  rowNum = 3,
  imageNodes: Node[] = []

const images = ref<string[]>([
  'https://image.qwq.link/images/2023/01/01/mmexport1653278805867.jpg',
  'https://image.qwq.link/images/2023/08/02/884519747.png',
  'https://image.qwq.link/images/2023/12/31/Lie11u_20231231_163855040d4d5ccf1d02c5170.jpg',
  'https://image.qwq.link/images/2023/12/26/Lie11u_20230401_064913404.jpg',
  'https://image.qwq.link/images/2023/12/26/Lie11u_20230910_171300132.jpg',
  'https://image.qwq.link/images/2023/12/26/Lie11u_20230910_161727020.jpg',
  'https://image.qwq.link/images/2023/08/09/Lie11u_20230625_062553950.jpg',
  'https://image.qwq.link/images/2023/12/31/Lie11u_20231231_1638229722ac071b78ae5d69f.jpg',
  'https://image.qwq.link/images/2023/12/31/Lie11u_20231231_1640212914a2460627d18af29.jpg',
  'https://image.qwq.link/images/2024/02/20/Lie11u_20231231_173905108.fix.jpg',
  'https://image.qwq.link/images/2023/12/31/Lie11u_20231231_16381242969d58cdc59bd50e3.jpg',
  'https://image.qwq.link/images/2023/12/26/Lie11u_20230910_173442871.jpg',
  'https://image.qwq.link/images/2023/01/01/LiecaFinal_20220725_054322819.jpg',
  'https://image.qwq.link/images/2023/01/01/IMG_20220522_193957.jpg',
  'https://image.qwq.link/images/2023/01/01/IMG_20221112_190211.jpg',
  'https://image.qwq.link/images/2023/01/01/IMG_20220723_183105.jpg',
  'https://image.qwq.link/images/2023/01/01/LiecaFinal_20220725_052618567.jpg',
  'https://image.qwq.link/images/2023/01/01/IMG_20220522_193155.jpg',
])

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
