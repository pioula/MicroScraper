import { useEffect, useState } from "react";
import useScrapData from "~/hooks/useScrapData";
import post_t from "~/services/post_t";
import useParser from "../../../components/Post/components/HtmlPost/useParser";

function useHome() {
    const { parsePostContent: parsePost } = useParser();
    const scrapData = useScrapData();
    const [data, setData] = useState<Array<post_t>>([]);

    useEffect(() => {
         scrapData().then((scrappedData) => setData(scrappedData) );
    }, []);

    return { content: 'foo' };
}

export default useHome;