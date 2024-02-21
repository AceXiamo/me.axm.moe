<template>
  <div class="flex flex-col pt-[70px] pb-[200px]">
    <div class="lg:content-w lt-lg:px-[20px] lg:mx-auto flex flex-col gap-[5px]">
      <span class="text-black dark:text-white text-[15px]"
        >「 {{ i18n.t('doing.title') }} 👀 」</span
      >
    </div>
    <div class="lg:content-w lt-lg:px-[20px] mx-auto mt-[50px]">
      <div class="text-md text-black">
        <img
          :src="Duolingo"
          class="w-[100px] drop-shadow-[4px_7px_5px_#00000050] dark:drop-shadow-[4px_7px_5px_#FFFFFF50]"
        />
      </div>
      <div class="w-full grid grid-cols-40 grid-rows-1 gap-[5px] mt-[20px]">
        <div
          class="grid grid-rows-7 lg:gap-[5px] lt-lg:gap-[2px]"
          v-for="j of 40"
          v-gsap="{
            method: 'from',
            config: {
              y: 20,
              opacity: 0,
              delay: j * 0.01,
            },
          }"
        >
          <div
            class="lg:h-[15px] lg:w-[15px] lt-lg:h-[8px] lt-lg:w-[8px] rounded-[2px] bg-gray-200 dark:bg-white/10"
            v-for="index of 7"
          ></div>
        </div>
      </div>
    </div>

    <div class="lg:content-w lt-lg:px-[20px] mx-auto mt-[50px]">
      <div
        class="text-md text-blue-400 flex items-center -translate-x-[7px] drop-shadow-[4px_7px_5px_#00000080] dark:drop-shadow-[4px_7px_5px_#FFFFFF90]"
      >
        <Icon name="meteocons:wind-offshore" class="text-[40px]" />
        <span class="">Sports</span>
      </div>
      <div class="w-full grid grid-cols-40 grid-rows-1 gap-[5px] mt-[20px]">
        <div
          class="grid grid-rows-7 lg:gap-[5px] lt-lg:gap-[2px]"
          v-for="j of 40"
          v-gsap="{
            method: 'from',
            config: {
              y: 20,
              opacity: 0,
              delay: (40 - j) * 0.01,
            },
          }"
        >
          <div
            class="lg:h-[15px] lg:w-[15px] lt-lg:h-[8px] lt-lg:w-[8px] rounded-[2px] bg-gray-200 dark:bg-white/10"
            v-for="index of 7"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Duolingo from '~/assets/images/duolingo.png'

const i18n = useI18n()
// const { data, pending, refresh, error } = useFetch('/api/duolingo')
// console.log(data)
</script>
