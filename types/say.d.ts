type SayRes = {
  post_data: PostDataItem[]
}

type PostDataItem = {
  content?: string
  pid?: number
  attach?:
    | string
    | {
        src?: string
        thum?: string
      }[]
}
