type Level = 'none' | 'low' | 'medium' | 'high'

type Gist = {
  url: string
  forks_url: string
  commits_url: string
  id: string
  node_id: string
  git_pull_url: string
  git_push_url: string
  html_url: string
  files: {
    [filename: string]: {
      filename: string
      type: 'text/plain'
      language: 'Text'
      raw_url: string
      size: number
      truncated: boolean
      content: string
    }
  }
  public: boolean
  created_at: string
  updated_at: string
  description: string
  comments: number
  user: null
  comments_url: string
  owner: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: 'User'
    site_admin: boolean
  }
  forks: any[]
  history: {
    user: object
    version: string
    committed_at: string
    change_status: object
    url: string
  }[]
  truncated: boolean
}
