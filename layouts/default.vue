<template>
  <div class="flex flex-col">
    <div
      class="mt-[30px] w-full flex items-center justify-end relative box-border lg:px-[200px] lt-lg:px-[20px]"
    >
      <div
        class="absolute lg:left-[200px] lt-lg:left-[20px] lg:w-[50px] lg:h-[50px] lt-lg:w-[40px] lt-lg:h-[40px]"
        id="header_avatar_container"
      ></div>
      <MenuBar :active="active" />
      <div
        class="lg:ml-[50px] lt-lg:ml-[10px] text-black dark:text-white w-[30px] h-[30px] rounded-[5px] flex transition-all duration-300 hover:bg-black/20 hover:dark:bg-white/20 cursor-pointer"
        @click="toggleTheme"
      >
        <icon name="heroicons:light-bulb" class="m-auto" />
      </div>
      <div
        class="ml-[10px] w-[30px] h-[30px] text-black flex dark:text-white rounded-[5px] transition-all duration-300 hover:bg-black/20 hover:dark:bg-white/20 cursor-pointer"
        @click="toggleLanguage"
      >
        <icon name="bi:translate" class="m-auto" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="tsx" setup>
const i18n = useI18n()
const route = useRoute()
const active = computed(() => route.name?.toString())
const colorMode = useColorMode()

if (!import.meta.dev) {
  useHead({
    script: [
      {
        src: '//sdk.51.la/js-sdk-pro.min.js?id=KLxrr5PEkHmAt1nW&ck=KLxrr5PEkHmAt1nW',
        id: 'LA_COLLECT',
      },
    ],
  })
}

const to = (path: string) => {
  if (route.path === path) return
  if (path.startsWith('http')) {
    window.open(path, '_blank')
    return
  }
  navigateTo(path)
}

watch(
  () => i18n.locale.value,
  () => {
    console.log('i18n.locale.value', i18n.locale.value)
  },
  { immediate: true },
)

const toggleLanguage = () => {
  const target = i18n.locale.value === 'en' ? 'zh' : 'en'
  i18n.setLocale(target)
}

const toggleTheme = (e: MouseEvent) => {
  const theme = document.querySelector(':root') as HTMLElement
  theme.style.setProperty('view-transition-name', 'color_theme')

  if (document.startViewTransition) {
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
  } else {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
}

const menu = [
  {
    title: 'menu.home',
    name: 'index',
    path: '/',
    icon: 'heroicons:home',
  },
  // {
  //   title: 'Say',
  //   name: 'say',
  //   path: '/say',
  //   icon: 'heroicons:chat-bubble-bottom-center-text',
  // },
  {
    title: 'menu.doing',
    name: 'doing',
    path: '/doing',
    icon: 'heroicons:cube-transparent-16-solid',
  },
  {
    title: 'menu.photo',
    name: 'photo',
    path: '/photo',
    icon: 'heroicons:photo-solid',
  },
  // {
  //   title: 'Blog',
  //   name: 'blog',
  //   path: 'https://axm.moe',
  //   icon: 'heroicons:puzzle-piece',
  // },
  // {
  //   title: 'Toy',
  //   name: 'toy',
  //   path: '/toy',
  //   icon: 'heroicons:puzzle-piece',
  // },
  // {
  //   title: 'About',
  //   name: 'about',
  //   path: '/about',
  //   icon: 'heroicons:window-solid',
  // },
]

function MenuBar({ active }: { active?: string }) {
  return (
    <div class="flex w-max p-[10px] rounded-md lg:gap-[50px] lt-lg:gap-[20px]">
      {menu.map(item => (
        <div
          class="flex items-center gap-[5px] lg:text-[16px] lt-lg:text-[15px] cursor-pointer text-black dark:text-white relative group"
          onClick={() => to(item.path)}
        >
          <icon name={item.icon} />
          <span class="select-none">{i18n.t(item.title)}</span>
          <div
            class={[
              `absolute inset-0 bg-black dark:bg-white -z-1 rounded-md opacity-0 transition-all duration-300 translate-y-[10px] translate-x-[5px]`,
              `group-hover:translate-[5px] group-hover:opacity-10`,
              active === item.name && '!translate-[5px] opacity-10',
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
