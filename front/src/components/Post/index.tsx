import post_t, { media_post_t } from '~/services/post_t';

import HtmlPost from './components/HtmlPost';
import MediaPost from './components/MediaPost';

import { html_post_t } from '~/services/post_t';

function Post(props: { post: post_t }) {
    return (
        <>
            <div>
                <div>
                    <p>{ props.post.author }</p>
                    <p>{ props.post.created }</p>
                    <p>{ props.post.subreddit }</p>
                </div>
                <h1>{ props.post.title }</h1>
                <div>
                    { (props.post.type === 'html') ? 
                    <HtmlPost post={ props.post as html_post_t } /> :
                    <MediaPost post={ props.post as media_post_t } /> }
                </div>
                <div>
                    <p>{ props.post.ups }</p>
                </div>
            </div>
        </>
    );
}

export default Post;