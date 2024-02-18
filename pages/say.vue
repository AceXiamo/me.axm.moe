<template>
  <div class="flex flex-col items-center pt-[70px] pb-[200px]">
    <div class="relative" ref="cover">
      <img
        src="https://axm.moe/wp-content/uploads/2024/02/114320165_p7.webp"
        class="w-[700px] rounded-md"
      />
    </div>
    <div class="w-[700px] flex flex-col gap-[100px] mt-[100px]">
      <template v-for="item in data?.post_data">
        <ChatItem
          :item="item"
          v-gsap="{
            method: 'from',
            config: {
              opacity: 0,
              x: -50,
              duration: .5,
              ease: 'back(5)',
              autoAlpha: 0,
              scrollTrigger: true,
            },
          }"
        />
      </template>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import gsap from 'gsap'
import Avatar from '~/assets/images/avatar.jpg'

const cover = ref()
const page = ref(0)

onMounted(() => {
  gsap.from(cover.value, {
    duration: 0.5,
    opacity: 0,
  })
})

function ChatItem({ item }: { item: PostDataItem }) {
  return (
    <div class="flex gap-[20px]">
      <img src={Avatar} class="w-[40px] h-[40px] rounded-full" />
      <div class="flex-auto flex flex-col">
        <div class="flex gap-[10px] items-center">
          <span class="text-gray-600 text-[12px]">xiamo</span>
          <span class="text-gray-400 text-[12px]">三天前</span>
        </div>
        <div class="bg-black bg-opacity-[0] rounded-md mt-[10px] flex flex-col gap-[15px]">
          <div class="text-black dark:text-white text-[13px]">{item.content}</div>
          {typeof item.attach !== 'string' && <ImageItem images={item.attach || []} />}
        </div>
        <div class="flex gap-[20px] text-gray-300 mt-[30px] justify-end items-center">
          <icon name="heroicons:heart" />
          <icon name="heroicons:chat-bubble-oval-left-ellipsis" />
        </div>
      </div>
    </div>
  )
}

function ImageItem({ images }: { images: PostAttachItem[] }) {
  return (
    <>
      {images.length === 1 && (
        <div class="w-[60%]">
          <img class="object-cover w-full rounded-md" src={images[0].thum} />
        </div>
      )}
      {images.length >= 2 && (
        <div class="grid grid-cols-3">
          {images.map(img => (
            <div class="w-full">
              <img class="max-h-[300px] object-cover w-full rounded-md" src={img.thum} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

const { data, pending, refresh, error } = useFetch('/api/say', {
  params: {
    page,
  },
})
</script>
