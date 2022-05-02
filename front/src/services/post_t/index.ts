type media_t = {
    url: string
}

type media_gallery_t = {
    url: string
}

type misc_t = {
    url: string
}

type post_t = {
    author: string,
    title: string,
    subreddit: string,
    ups: number,
    permalink: string,
    created: string,
    type: string,
    html?: string,
    media?:  media_t,
    media_gallery?: media_gallery_t,
    misc?: misc_t
}

export default post_t;