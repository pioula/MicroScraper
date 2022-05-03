import parse from "html-react-parser";

function useParser() {
    function parsePostContent(content: string) {
        return parse(content);
    }

    return { parsePostContent: parsePostContent };
}

export default useParser;