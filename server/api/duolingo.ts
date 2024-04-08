import cron from 'node-cron'
import https from 'https'

let duolingoImg: string | null = null
const API = 'https://me.axm.moe/service/duolingo/image?radius=30'

const syncImage = async () => {
  const blob = await fetch(API)
  const arrayBuffer = await blob.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  duolingoImg = `data:image/png;base64,${buffer.toString('base64')}`
}

// refresh every day at 08:01
cron.schedule('1 8 * * *', syncImage)

export default defineEventHandler(async event => {
  if (!duolingoImg) {
    await syncImage()
  }
  return duolingoImg
})
