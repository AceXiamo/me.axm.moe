export const images = ref<ImageItem[]>([
  { url: 'https://image.qwq.link/images/2024/03/31/Lie11u_20240330_201232514.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2024/03/31/Lie11u_20240330_194107631.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2024/03/31/Lie11u_20240330_190224764.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2024/03/31/Lie11u_20240330_184457760.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2024/03/31/Lie11u_20240330_183834806.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2024/03/31/Lie11u_20240330_184239221.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/01/01/mmexport1653278805867.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2024/01/03/2301703584467_.pic_hd.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/12/31/Lie11u_20231231_163855040d4d5ccf1d02c5170.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/12/26/Lie11u_20230401_064913404.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/12/26/Lie11u_20230910_171300132.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/12/26/Lie11u_20230910_161727020.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/08/09/Lie11u_20230625_062553950.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/12/31/Lie11u_20231231_1638229722ac071b78ae5d69f.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/12/31/Lie11u_20231231_1640212914a2460627d18af29.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2024/02/20/Lie11u_20231231_173905108.fix.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/12/31/Lie11u_20231231_16381242969d58cdc59bd50e3.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/12/26/Lie11u_20230910_173442871.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/01/01/LiecaFinal_20220725_054322819.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/01/01/IMG_20220522_193957.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/01/01/IMG_20221112_190211.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/01/01/IMG_20220723_183105.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/01/01/LiecaFinal_20220725_052618567.jpg', full_loaded: false },
  { url: 'https://image.qwq.link/images/2023/01/01/IMG_20220522_193155.jpg', full_loaded: false },
])

export type ImageItem = {
  url: string
  full_loaded: boolean
}

export const loadLowerImgInSiteInit = () => {
  images.value.forEach(item => {
    const img = new Image()
    const arr = item.url.split('.')
    const suffix = arr.pop()
    const name = arr.join('.')
    img.src = `${name}.md.${suffix}`
  })
}
