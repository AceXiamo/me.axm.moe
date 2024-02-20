const year = new Date().getFullYear()
const API = `https://gist.github.com/${process.env.GITHUB_USERNAME}/${process.env.GIST_SECRET}/raw/duolingo_${year}.txt`

export default defineEventHandler(async (event): Promise<SayRes> => {
  const response = await fetch(API, {
    method: 'GET',
  })
  return response.json()
})
