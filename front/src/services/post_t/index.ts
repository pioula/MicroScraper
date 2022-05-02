type image_t = {
    type: "image_t";
    image: string;
}

type gif_t = {
    type: "gif_t";
    gif: string;
}

type mp4_t = {
    type: "mp4_t";
    mp4: string;
}   

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
    medias: Array<image_t | gif_t | mp4_t>
}


export default post_t;
export type { image_t, gif_t, mp4_t }