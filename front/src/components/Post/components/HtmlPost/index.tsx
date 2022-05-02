import { html_post_t } from '~/services/post_t';

function HtmlPost(props: { post: html_post_t }) {
    return (
        <>
            { props.post.html }
        </>
    );
}

export default HtmlPost;