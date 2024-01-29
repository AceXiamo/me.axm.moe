<template>
  <div class="flex flex-col">
    <div class="mt-[30px] w-full flex items-center justify-end relative px-[200px] box-border">
      <div class="absolute left-[200px] w-[50px] h-[50px]" id="header_avatar_container"></div>
      <MenuBar :active="active" />
      <div
        class="ml-[50px] text-black dark:text-white w-[30px] h-[30px] rounded-[5px] flex transition-all duration-300 hover:bg-black/20 hover:dark:bg-white/20 cursor-pointer"
        @click="toggleTheme"
      >
        <icon name="heroicons:light-bulb" class="m-auto" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="tsx" setup>
const route = useRoute()
const active = computed(() => route.path)
let htmlElement: HTMLElement | null = null
const colorMode = useColorMode()

const to = (path: string) => {
  if (route.path === path) return
  navigateTo(path)
}

const toggleTheme = (e: MouseEvent) => {
  const theme = document.querySelector(':root') as HTMLElement
  theme.style.setProperty('view-transition-name', 'color_theme')
  const transition = document.startViewTransition(() => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  })
  transition.ready.then(() => {
    theme.animate(
      {
        clipPath: [
          `circle(0 at ${e.clientX}px ${e.clientY}px)`,
          `circle(100% at ${e.clientX}px ${e.clientY}px)`,
        ],
      },
      {
        duration: 500,
        easing: 'ease-in',
        // 指定要附加动画的伪元素
        pseudoElement: '::view-transition-new(color_theme)',
      },
    )
  })
  transition.finished.then(() => {
    theme.style.removeProperty('view-transition-name')
  })
}

const menu = [
  {
    name: 'Home',
    path: '/',
    icon: 'heroicons:home',
  },
  {
    name: 'Say',
    path: '/say',
    icon: 'heroicons:chat-bubble-bottom-center-text',
  },
]

function MenuBar({ active }: { active?: string }) {
  return (
    <div class="flex w-max p-[10px] rounded-md gap-[50px]">
      {menu.map(item => (
        <div
          class="flex items-center gap-[5px] text-[16px] cursor-pointer text-black dark:text-white relative group"
          onClick={() => to(item.path)}
        >
          <icon name={item.icon} />
          <span class="select-none">{item.name}</span>
          <div
            class={[
              `absolute inset-0 bg-black dark:bg-white -z-1 rounded-md opacity-0 transition-all duration-300 translate-y-[10px] translate-x-[5px]`,
              `group-hover:translate-[5px] group-hover:opacity-10`,
              active === item.path && '!translate-[5px] opacity-10',
            ]}
          ></div>
        </div>
      ))}
    </div>
  )
}
</script>

<style>
::view-transition-old(color_theme),
::view-transition-new(color_theme) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
</style>
