import { useState } from 'react';
import { useEffect } from 'react';

import parse from "html-react-parser";

import useScrapData from '~/hooks/useScrapData';

type post_t = {
    author: string,
    created: string,
    downs: number,
    selftext_html: string,
    subreddit: string,
    title: string,
    ups: number,
    url: string,
}

function Home() {
    const scrapData = useScrapData();
    const [data, setData] = useState<Array<post_t>>([]);

    useEffect(() => {
         scrapData().then((scrappedData) => setData(scrappedData) );
    }, []);

    return (
        <>
            { data.length === 0 ? <div>loading...</div> :
                <div>
                    { parse(data[1].selftext_html) }
                </div>
            }
        </>
    );
}

export default Home;