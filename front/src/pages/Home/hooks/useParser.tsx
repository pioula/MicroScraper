import post_t from "~/services/post_t";
import parse from "html-react-parser";

function useParser() {
    function parsePost(post: post_t) {
        return 'foo bar foo bar foo'
    }

    return { parsePost: parsePost };
}

export default useParser;