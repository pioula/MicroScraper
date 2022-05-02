import post_t from '~/services/post_t';

import { html_post_t } from '~/services/post_t';

// interface post_t {
//     author: string,
//     title: string,
//     subreddit: string,
//     ups: number,
//     permalink: string,
//     created: string,
//     type: string,
// }

// export interface html_post_t extends post_t {
//     type: 'html',
//     html: string,
// }

function HtmlPost(props: { post: html_post_t }) {
    return (
        <>
            { props.post.html }
        </>
    );
}

export default HtmlPost;