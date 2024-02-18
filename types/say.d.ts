type SayRes = {
  post_data: PostDataItem[]
}

type PostDataItem = {
  content?: string
  pid?: number
  attach?: string | PostAttachItem[]
}

type PostAttachItem = {
  src: string
  thum: string
}
