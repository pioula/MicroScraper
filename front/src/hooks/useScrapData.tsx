import { useEffect, useState } from "react";
import post_t from "~/services/post_t";

function useScrapData() {
    const [data, setData] = useState<Array<post_t>>([]);

    useEffect(() => {
         scrapData().then((scrappedData) => setData(scrappedData));
    }, []);

    function scrapData() {
        return fetch('http://34.107.209.5/data', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .catch((err) => { console.log("error, ", err); return { foo: 'bar' } });
    }

    return { data };
}

export default useScrapData;