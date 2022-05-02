import { useEffect, useState } from "react";
import useScrapData from "~/hooks/useScrapData";
import post_t from "~/services/post_t";
import useParser from "./useParser";

function useHome() {
    const { parsePost } = useParser();
    const scrapData = useScrapData();
    const [data, setData] = useState<Array<post_t>>([]);

    useEffect(() => {
         scrapData().then((scrappedData) => setData(scrappedData) );
    }, []);

    return { content: parsePost(data[0]) };
}

export default useHome;