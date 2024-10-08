<template>
  <div class="flex gap-[10px] lg:p-[50px_200px] lt-lg:p-[50px_20px]">
    <div class="flex flex-col max-w-[800px]">
      <div id="home_avatar_container" class="w-[100px] h-[100px] mb-[30px]"></div>
      <ClientOnly>
        <template v-for="(item, index) in arr" :key="index">
          <div v-gsap="getGsapConfig(index)">
            <component :is="item" />
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>
<script setup lang="tsx">
import gsap from 'gsap'
import { loadLowerImgInSiteInit } from '@/utils/photo'
import dayjs from 'dayjs'
import Wave from '~/assets/images/wave.png'
import { render } from 'vue'
import Screenshot from '~/assets/images/screenshot.png'

const day = dayjs().diff(dayjs('2024-02-21'), 'day') + 345

const i18n = useI18n()

function Info_1() {
  return (
    <>
      <div class="text-[14px] text-black/80 dark:text-white/80 leading-10">
        {i18n.t('index.line_1')}
      </div>
    </>
  )
}

function Info_2() {
  return (
    <>
      <div class="text-[14px] text-black/80 dark:text-white/80 leading-10 flex items-center flex-wrap">
        <div
          class="flex items-center gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px]
          before:w-0 before:bg-violet-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <icon name="logos:java" />
          <span>Java,</span>
        </div>
        <div
          class="flex items-center ml-2 gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px]
          before:w-0 before:bg-sky-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <icon name="logos:go" />
          <span>Golang,</span>
        </div>
        <div
          class="flex items-center ml-2 gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px]
          before:w-0 before:bg-yellow-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <icon name="logos:javascript" />
          <span>JavaScript,</span>
        </div>
        <div
          class="flex items-center ml-2 gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px]
          before:w-0 before:bg-blue-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <icon name="logos:typescript-icon" />
          <span>TypeScript,</span>
        </div>
        <div
          class="flex items-center ml-2 gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px]
          before:w-0 before:bg-emerald-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <icon name="logos:vue" />
          <span>Vue,</span>
        </div>
        <div
          class="flex items-center ml-2 gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px]
          before:w-0 before:bg-green-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <icon name="logos:nuxt-icon" />
          <span>Nuxt,</span>
        </div>
        <div
          class="flex items-center ml-2 gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px]
          before:w-0 before:bg-purple-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <icon name="logos:react" />
          <span>React,</span>
        </div>
        <div
          class="flex items-center ml-2 gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px]
          before:w-0 before:bg-black before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <icon name="logos:nextjs-icon" />
          <span>Nextjs,</span>
        </div>
        <div
          class="flex items-center ml-2 gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px]
          before:w-0 before:bg-purple-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <icon name="logos:react" />
          <span>React Native ...</span>
        </div>
      </div>
    </>
  )
}

function SpanItem({ str }: { str: string }) {
  return <span class="text-[14px] text-black/80 dark:text-white/80 leading-10">{i18n.t(str)}</span>
}

function Hello() {
  return (
    <div class="flex gap-[5px] items-center">
      <span class="text-[14px] text-black/80 dark:text-white/80 leading-10 translate-y-[5px]">
        {i18n.t('index.line_0')}
      </span>
      <img
        src="https://file.qwq.link/gif/Hi.gif"
        alt="Hi"
        class="w-[20px] h-[20px] ml-[5px] inline-block"
      />
    </div>
  )
}

const arr = [
  <Hello />,
  <Info_1 />,
  <SpanItem str="index.line_2" />,
  <Info_2 />,
  <LineThree str="index.line_3" />,
  <SpanItem str="index.line_4" />,
  <SpanItem str="index.line_5" />,
  <Another />,
  <Dot />,
  <Blog />,
]

function Another() {
  return (
    <div class="items-center flex gap-[15px] mt-[10px]">
      <icon
        name="logos:github-octocat"
        class="text-[25px]"
        onClick={() => to('https://github.com/AceXiamo')}
        onMouseenter={(e: Event) => {
          gsap.to(e.currentTarget, {
            duration: 0.3,
            scale: 1.3,
            ease: 'back.out(5)',
          })
        }}
        onMouseleave={(e: Event) => {
          gsap.to(e.currentTarget, {
            duration: 0.3,
            scale: 1,
            ease: 'back.out(5)',
          })
        }}
      />
      <icon
        name="logos:twitter"
        class="text-[25px]"
        onClick={() => to('https://twitter.com/AceXiamo')}
        onMouseenter={(e: Event) => {
          gsap.to(e.currentTarget, {
            duration: 0.3,
            scale: 1.3,
            ease: 'back.out(5)',
          })
        }}
        onMouseleave={(e: Event) => {
          gsap.to(e.currentTarget, {
            duration: 0.3,
            scale: 1,
            ease: 'back.out(5)',
          })
        }}
      />
    </div>
  )
}

function Dot() {
  return <div class="text-[14px] text-black/80 dark:text-white/80 leading-10">...</div>
}

function Blog() {
  return (
    <div class="text-[14px] text-black/80 dark:text-white/80 leading-10 flex gap-[5px]">
      <span>{i18n.t('index.line_6_1')}</span>
      <div
        class="text-[14px] cursor-pointer text-blue-400 dark:text-blue-300 relative flex justify-center wave_line screenshot_item"
        onMouseenter={(e: Event) => {}}
        onMouseleave={(e: Event) => {}}
        style={{
          backgroundImage: `url(${Wave})`,
        }}
        onClick={() => to('https://axm.moe')}
      >
        <span>{i18n.t('index.line_6_2')}</span>
        {/* site screenshot */}
        <div class="site_screenshot absolute bottom-0 translate-y-full">
          <img src={Screenshot} class="w-[260px]" />
        </div>
      </div>
      <span>{i18n.t('index.line_6_3')}</span>
    </div>
  )
}

function LineThree({ str }: { str: string }) {
  return (
    <div>
      <span class="text-[14px] text-black/80 dark:text-white/80 leading-10">{i18n.t(str)}</span>
      <div class="inline-block drop-shadow-[5px_5px_5px_rgba(0,0,0,.4)] dark:drop-shadow-[5px_5px_5px_rgba(255,255,255,.5)] ml-[5px]">
        <icon name="twemoji:fire" />
        <span class="text-[14px] text-orange-500 leading-10 ml-[5px] cursor-default">{day}d</span>
      </div>
    </div>
  )
}

const getGsapConfig = (index: number) => {
  return {
    method: 'from',
    config: {
      opacity: 0,
      x: -25,
      delay: index * 0.05,
      ease: 'back(5)',
    },
  }
}

const to = (path: string) => {
  window.open(path, '_blank')
}

onMounted(() => {
  loadLowerImgInSiteInit()
})
</script>

<style>
.wave_line {
  background-repeat: repeat-x;
  background-size: 15px auto;
  background-position: 0 80%;

  &:hover {
    animation: wave 6s linear infinite;
  }
}

@keyframes wave {
  0% {
    background-position-x: 2px;
  }
  100% {
    background-position-x: 50px;
  }
}

.screenshot_item {
  .site_screenshot {
    opacity: 0;
    bottom: 5px;
    transition: all 0.3s;
    pointer-events: none;
  }

  &:hover {
    .site_screenshot {
      opacity: 1;
      bottom: 0;
    }
  }
}
</style>
