import { useState } from 'react';
import { useEffect } from 'react';

import parse from 'html-react-parser';

import useScrapData from '~/hooks/useScrapData';

type media_t = {
    url: string
}

type media_gallery_t = {
    url: string
}

type misc_t = {
    url: string
}

type post_t = {
    author: string,
    title: string,
    subreddit: string,
    ups: number,
    permalink: string,
    created: string,
    type: string,
    html?: string,
    media?:  media_t,
    media_gallery?: media_gallery_t,
    misc?: misc_t
}

function parsePost(post: post_t) {
    try {
        switch (post.type) {
            case 'html':
                return parse(post.html)
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
                    { parsePost(data[1]) }
                </div>
            }
        </>
    );
}

export default Home;