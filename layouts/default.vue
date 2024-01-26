<template>
  <div class="flex flex-col">
    <div class="mt-[30px] w-full grid place-content-center relative">
      <div class="bg-white/20 flex w-max p-[10px] rounded-md gap-[20px]">
        <div class="flex items-center gap-[5px] text-[16px] cursor-pointer" @click="to('/')">
          <icon name="heroicons:home" />
          <span class="select-none">Home</span>
        </div>
        <div class="flex items-center gap-[5px] text-[16px] cursor-pointer" @click="to('/say')">
          <icon name="heroicons:chat-bubble-bottom-center-text" />
          <span class="select-none">Say</span>
        </div>
      </div>

      <div class="absolute right-[50px]" id="header_avatar_container"></div>
    </div>
    <slot class="mt-[200px]" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const to = (path: string) => {
  if (route.path === path) return
  navigateTo(path)
}
</script>
