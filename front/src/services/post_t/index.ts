type image_t = string

interface post_t {
    author: string,
    title: string,
    subreddit: string,
    ups: number,
    permalink: string,
    created: string,
    type: string,
}

export interface html_post_t extends post_t {
    type: 'html',
    html: string,
}

export interface media_post_t extends post_t {
    type: 'media',
    media: Array<image_t>
}


export default post_t;