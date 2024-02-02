<template>
  <div class="flex flex-col items-center pt-[70px] pb-[200px]">
    <div class="relative" ref="cover">
      <img
        src="https://axm.moe/wp-content/uploads/2024/02/114320165_p7.webp"
        class="w-[700px] rounded-md"
      />
    </div>
    <div class="w-[700px] flex flex-col gap-[100px] mt-[50px]">
      <!-- <template v-for="(item, index) in data.post_data">
        <ChatItem :item="item" />
      </template> -->
    </div>
  </div>
</template>

<script lang="tsx" setup>
import gsap from 'gsap'

const cover = ref()
const dot = ref()
const page = ref(0)

const handleFontAnime = () => {
  gsap.to(dot.value, {
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    opacity: 0,
    yoyoEase: true,
  })
}

onMounted(() => {
  handleFontAnime()

  gsap.from(cover.value, {
    duration: .5,
    opacity: 0,
  })
})

function ChatItem({ item }: { item: PostDataItem }) {
  return (
    <div class="flex gap-[20px]">
      <img src="https://axm.moe/avatar" class="w-[40px] h-[40px] rounded-full" />
      <div class="flex-auto flex flex-col">
        <div class="flex gap-[10px] items-center">
          <span class="text-gray-600 text-[12px]">xiamo</span>
          <span class="text-gray-400 text-[12px]">三天前</span>
        </div>
        <div class="bg-black bg-opacity-[0] rounded-md mt-[10px]">
          <div class="text-black dark:text-white text-[13px]">{item.content}</div>
        </div>
        <div class="flex gap-[20px] text-gray-300 mt-[30px] justify-end items-center">
          <icon name="heroicons:heart" />
          <icon name="heroicons:chat-bubble-oval-left-ellipsis" />
        </div>
      </div>
    </div>
  )
}

// const { data, pending, refresh, error } = useFetch('/api/say', {
//   params: {
//     page,
//   },
// })
</script>
