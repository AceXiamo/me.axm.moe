<template>
  <div class="flex gap-[10px] p-[100px_200px]">
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

function Info_1() {
  return (
    <>
      <div class="text-[14px] text-white/80 leading-10">
        {"I'm `AceXiamo`, you can call me [夏末 / xiamo]."}
      </div>
    </>
  )
}

function Info_2() {
  return (
    <>
      <div class="text-[14px] text-white/80 leading-10 flex items-center">
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
          before:w-0 before:bg-purple-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <icon name="logos:react" />
          <span>React</span>
        </div>
      </div>
    </>
  )
}

function SpanItem({ str }: { str: string }) {
  return <span class="text-[14px] text-white/80 leading-10">{str}</span>
}

const arr = [
  <SpanItem str="Hello 👋" />,
  <Info_1 />,
  <SpanItem str="I'm a full-stack developer, but I might prefer front-end development over back-end, I hope to do something meaningful with this." />,
  <Info_2 />,
  <SpanItem str="In my free time, I learn English on Duolingo, and have been doing so up until now." />,
  <SpanItem str="I also like anime, and I've watched a lot of them, such as 'Steins;Gate', 'Clannad', 'Attack on Titan', and so on." />,
  <SpanItem str="Maybe, You can find me on ..." />,
  <div class="items-center flex gap-[15px]">
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
  </div>,
]

const getGsapConfig = (index: number) => {
  return {
    method: 'from',
    config: {
      opacity: 0,
      x: -20,
      delay: index * 0.1,
    },
  }
}

const to = (path: string) => {
  window.open(path, '_blank')
}

onMounted(() => {
  useFetch('/api/say').then(({ data }) => {
    console.log(data)
  })
})
</script>
