import { useEffect, useState } from "react";
import useScrapData from "~/hooks/useScrapData";
import post_t from "~/services/post_t";

function useHome() {
    const scrapData = useScrapData();
    const [data, setData] = useState<Array<post_t>>([]);

    function getFragmentOfData(data: Array<post_t>) {
        return [data[0], data[1], data[2], data[3], data[4]];
    }

    useEffect(() => {
         scrapData().then((scrappedData) => setData(getFragmentOfData(scrappedData)) );
    }, []);

    return { data: data };
}

export default useHome;