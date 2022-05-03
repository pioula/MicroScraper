import { html_post_t } from '~/services/post_t';
import useParser from './useParser';

function HtmlPost(props: { post: html_post_t }) {
    const { parsePostContent } = useParser();
    return (
        <>
            { parsePostContent(props.post.html) }
        </>
    );
}

export default HtmlPost;