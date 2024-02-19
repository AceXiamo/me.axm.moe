<template>
  <div class="flex flex-col items-center pt-[70px] pb-[200px]">
    <div class="content-w flex flex-col gap-[5px]">
      <span class="text-black dark:text-white text-[15px]">摆烂，摆烂，不摆喵 😤</span>
      <span class="text-gray-400 text-[13px]"
        >一直想开摆，也确实在摆，摆烂也并无问题，只是觉得做一些有意义的事情同样是必不可少的</span
      >
    </div>
    <div class="content-w mt-[50px]">
      <div class="text-md text-black">
        <img
          :src="Duolingo"
          class="w-[100px] drop-shadow-[4px_7px_5px_#00000050] dark:drop-shadow-[4px_7px_5px_#FFFFFF50]"
        />
      </div>
      <div class="w-full grid grid-cols-50 grid-rows-1 gap-[5px] mt-[20px]">
        <div class="grid grid-rows-7 gap-[5px]" v-for="j of 50">
          <div
            class="h-[10px] w-[10px] rounded-[2px] bg-gray-200 dark:bg-white/10"
            v-for="index of 7"
            v-gsap="{
              method: 'from',
              config: {
                y: 20,
                opacity: 0,
                delay: index * 0.01 + j * 0.01,
              },
            }"
          ></div>
        </div>
      </div>
    </div>

    <div class="content-w mt-[50px]">
      <div
        class="text-md text-blue-400 flex items-center -translate-x-[7px] drop-shadow-[4px_7px_5px_#00000080] dark:drop-shadow-[4px_7px_5px_#FFFFFF90]"
      >
        <Icon name="meteocons:wind-offshore" class="text-[40px]" />
        <span class="">Sports</span>
      </div>
      <div class="w-full grid grid-cols-50 grid-rows-1 gap-[5px] mt-[20px]">
        <div class="grid grid-rows-7 gap-[5px]" v-for="j of 50">
          <div
            class="h-[10px] w-[10px] rounded-[2px] bg-gray-200 dark:bg-white/10"
            v-for="index of 7"
            v-gsap="{
              method: 'from',
              config: {
                y: -20,
                opacity: 0,
                delay: index * 0.01 + (50 - j) * 0.01,
              },
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Duolingo from '~/assets/images/duolingo.png'
</script>
