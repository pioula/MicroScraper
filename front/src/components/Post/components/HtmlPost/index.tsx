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
        <div>
            <div>
                <p>{ props.post.author }</p>
                <p>{ props.post.created }</p>
                <p>{ props.post.subreddit }</p>
            </div>
            <h1>{ props.post.title }</h1>
            <div>
                { props.post.html }
            </div>
            <div>
                <p>{ props.post.ups }</p>
            </div>
        </div>
    );
}

export default HtmlPost;