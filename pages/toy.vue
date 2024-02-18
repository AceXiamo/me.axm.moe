<template>
  <div class="flex flex-col items-center pt-[150px] pb-[200px]">
    <div class="w-[800px] flex flex-col gap-[80px]">
      <template v-for="item in arr">
        <ToyItem :item="item" />
      </template>
    </div>
  </div>
</template>

<script lang="tsx" setup>
useHead({
  meta: [
    {
      name: 'referrer',
      content: 'no-referrer',
    },
  ],
})

type Toy = {
  cover?: string
  name?: string
  from?: string
  company?: string
  price?: number
  desc?: string
}

const arr: Toy[] = [
  {
    cover: '//i0.hdslb.com/bfs/mall/mall/e2/24/e2247d8851d8f39daa9eb7fcb3349556.png@300w_300h',
    name: 'Nachoneko',
    from: '虚拟主播',
    company: 'F:NEX',
    price: 299,
    desc: '',
  },
  {
    cover: '//i0.hdslb.com/bfs/mall/mall/4e/23/4e23963340051cea2b4955b58fbb58a3.png@300w_300h',
    name: '洛琪希·米格路迪亚',
    from: '无职转生 ~到了异世界就拿出真本事~',
    company: '寿屋',
    price: 299,
    desc: '',
  },
  {
    cover: '//i0.hdslb.com/bfs/mall/mall/81/a2/81a20386313ebfb205a1472a3706beb9.png@300w_300h',
    name: '后藤独',
    from: '孤独摇滚！',
    company: 'FuRyu',
    price: 299,
    desc: '',
  },
  {
    cover: '//i0.hdslb.com/bfs/mall/mall/9b/3f/9b3f98f5a7320731658614b764afb4d1.png@300w_300h',
    name: '惠惠',
    from: '为美好的世界献上祝福！',
    company: 'Max Factory',
    price: 299,
    desc: '',
  },
  // {
  //   cover: '//i0.hdslb.com/bfs/mall/mall/ff/77/ff779fa09ecbd7d578780cdd33b166c2.png@300w_300h',
  //   name: '雏鹤爱',
  //   from: '龙王的工作',
  //   company: '寿屋',
  //   price: 299,
  //   desc: '',
  // },
  // {
  //   cover: '//i0.hdslb.com/bfs/mall/mall/49/13/4913e51c1b1ed66f5c75b33c3ea77b7a.png@300w_300h',
  // },
  // {
  //   cover: '//i0.hdslb.com/bfs/mall/mall/d1/23/d123bca71719836b571ccc19c15ec07f.png@300w_300h',
  // },
]

function ToyItem({ item }: { item: Toy }) {
  return (
    <div class="flex gap-[20px]" v-for="item in arr">
      <div class="flex shadow-md shadow-gray-900/5 bg-white rounded-md w-[170px]">
        <img class="w-full h-full object-cover" src={item.cover} />
      </div>
      <div class="flex flex-col gap-[5px] flex-auto">
        <div class="flex items-end gap-[10px]">
          <span class="text-gray-400 text-[12px]">name:</span>
          <span class="text-[14px] text-[#333]">{item.name}</span>
        </div>
        <div class="flex items-end gap-[10px]">
          <span class="text-gray-400 text-[12px]">from:</span>
          <span class="text-[14px] text-[#333]">{item.from}</span>
        </div>
        <div class="flex items-end gap-[10px]">
          <span class="text-gray-400 text-[12px]">company:</span>
          <span class="text-[14px] text-[#333]">{item.company}</span>
        </div>
        <div class="flex items-end gap-[10px]">
          <span class="text-gray-400 text-[12px]">price:</span>
          <span class="text-[14px] text-[#333]">{item.price}</span>
        </div>
      </div>
    </div>
  )
}
</script>
