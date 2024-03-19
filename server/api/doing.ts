import cron from 'node-cron'

type QueryType = 'duolingo' | 'sports'

const result = {
  duolingo: [],
  sports: [],
}
const GITHUB_GIST_API = 'https://api.github.com/gists/'

// clear cache every day
cron.schedule('0 0 * * *', () => {
  Object.keys(result).forEach(key => {
    result[key as QueryType] = []
  })
})

export default defineEventHandler(async (event): Promise<{ day: string; value: Level }[]> => {
  const query = getQuery(event)
  const name = (query.name as QueryType) || 'duolingo'
  const resFromCache = result[name]
  if (resFromCache && resFromCache.length > 0) {
    return resFromCache
  }

  const resp = await fetch(GITHUB_GIST_API + '79c0de5e0c87b29067436056955871e4')
  const json: Gist = await resp.json()
  const data = JSON.parse(json.files[`${name}.txt`].content)
  result[name] = data
  return data
})
