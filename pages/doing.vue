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
          <DoingItem v-for="i of 7" :offset="(40 - j) * 7 - i + weekDay" :type="'duolingo'" />
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
          <DoingItem v-for="i of 7" :offset="(40 - j) * 7 - i + weekDay" :type="'sports'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import dayjs from 'dayjs'
import Duolingo from '~/assets/images/duolingo.png'

const i18n = useI18n()
const { data: sports, pending: pendingForSports } = useFetch('/api/doing?name=sports')
const { data: duolingo, pending: pendingForDuolingo } = useFetch('/api/doing?name=duolingo')
const day = dayjs()
const weekDay = day.day()

const colorForLevel = (level: Level) => {
  switch (level) {
    case 'low':
      return '#22c55e60'
    case 'medium':
      return '#22c55e80'
    case 'high':
      return '#22c55e'
    default:
      return ''
  }
}

function DoingItem({ offset, type }: { offset: number; type: 'duolingo' | 'sports' }) {
  const offsetDay = day.subtract(offset, 'day').format('YYYY-MM-DD')
  const status =
    type === 'duolingo'
      ? duolingo.value?.find(item => item.day === offsetDay)
      : sports.value?.find(item => item.day === offsetDay)
  const color = colorForLevel(status?.value || 'none')
  return (
    <div
      class="lg:h-[15px] lg:w-[15px] lt-lg:h-[8px] lt-lg:w-[8px] rounded-[2px] bg-gray-200 text-[8px] dark:bg-white/10"
      style={{
        backgroundColor: color,
      }}
    ></div>
  )
}
</script>
