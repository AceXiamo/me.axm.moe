export const images = ref<string[]>([
  'https://image.qwq.link/images/2023/01/01/mmexport1653278805867.jpg',
  'https://image.qwq.link/images/2023/08/02/884519747.png',
  'https://image.qwq.link/images/2023/12/31/Lie11u_20231231_163855040d4d5ccf1d02c5170.jpg',
  'https://image.qwq.link/images/2023/12/26/Lie11u_20230401_064913404.jpg',
  'https://image.qwq.link/images/2023/12/26/Lie11u_20230910_171300132.jpg',
  'https://image.qwq.link/images/2023/12/26/Lie11u_20230910_161727020.jpg',
  'https://image.qwq.link/images/2023/08/09/Lie11u_20230625_062553950.jpg',
  'https://image.qwq.link/images/2023/12/31/Lie11u_20231231_1638229722ac071b78ae5d69f.jpg',
  'https://image.qwq.link/images/2023/12/31/Lie11u_20231231_1640212914a2460627d18af29.jpg',
  'https://image.qwq.link/images/2024/02/20/Lie11u_20231231_173905108.fix.jpg',
  'https://image.qwq.link/images/2023/12/31/Lie11u_20231231_16381242969d58cdc59bd50e3.jpg',
  'https://image.qwq.link/images/2023/12/26/Lie11u_20230910_173442871.jpg',
  'https://image.qwq.link/images/2023/01/01/LiecaFinal_20220725_054322819.jpg',
  'https://image.qwq.link/images/2023/01/01/IMG_20220522_193957.jpg',
  'https://image.qwq.link/images/2023/01/01/IMG_20221112_190211.jpg',
  'https://image.qwq.link/images/2023/01/01/IMG_20220723_183105.jpg',
  'https://image.qwq.link/images/2023/01/01/LiecaFinal_20220725_052618567.jpg',
  'https://image.qwq.link/images/2023/01/01/IMG_20220522_193155.jpg',
])

export const loadLowerImgInSiteInit = () => {
  images.value.forEach(url => {
    const img = new Image()
    const arr = url.split('.')
    const suffix = arr.pop()
    const name = arr.join('.')
    img.src = `${name}.md.${suffix}`
  })
}
