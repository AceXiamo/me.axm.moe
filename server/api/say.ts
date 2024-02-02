const API = process.env.SAY_API || ''
const REQUEST_TYPE = 'POST'

const query = {
  post_type: 'moment',
  tax_query: [{ taxonomy: 'moments', field: 'term_id', terms: [4, 11] }],
  post_status: 'publish',
  ignore_sticky_posts: false,
  suppress_filters: false,
  cache_results: true,
  update_post_term_cache: true,
  update_menu_item_cache: false,
  lazy_load_term_meta: true,
  update_post_meta_cache: true,
  posts_per_page: 10,
  nopaging: false,
  comments_per_page: '50',
  no_found_rows: false,
  taxonomy: 'moments',
  term_id: 4,
  order: 'DESC',

  // only get the post content
  only_json: true,
}

const getFormData = (page: number): FormData => {
  const formData = new FormData()
  formData.append('action', 'moment_list_load')
  formData.append('query', JSON.stringify(query))
  formData.append('page', page.toString())
  return formData
}

export default defineEventHandler(async (event): Promise<SayRes> => {
  const query: { page: number } = getQuery(event)
  const response = await fetch(API, {
    method: REQUEST_TYPE,
    body: getFormData(query.page || 0),
  })
  return response.json()
})
