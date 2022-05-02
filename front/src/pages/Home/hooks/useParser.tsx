import post_t from "~/services/post_t";
import parse from "html-react-parser";

function useParser() {
    function parsePost(post: post_t) {
        try {
            switch (post.type) {
                case 'html':
                    return parse("" + post.html)
                case 'media':
                    return 'sample media'
                case 'media_gallery':
                    return 'sample media_gallery'
                case 'misc':
                    return 'misc'
                default:
                    return 'unknown'
            }
        } catch (x) {
            return 'I have no type!\n' + (x as Error).message
        }
    }

    return { parsePost: parsePost };
}

export default useParser;