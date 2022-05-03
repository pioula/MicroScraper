import { Container, Row } from 'react-bootstrap';
import Post from '~/components/Post';
import { html_post_t, media_post_t } from '~/services/post_t';
import useHome from './hooks/useHome';

import styles from './styles/styles';

// interface post_t {
//     author: string,
//     title: string,
//     subreddit: string,
//     ups: number,
//     permalink: string,
//     created: string,
//     type: string,
// }

// export interface html_post_t extends post_t {
//     type: 'html',
//     html: string,
// }


const foo_html: html_post_t = {
    type: 'html',
    html: 'foo bar content foo barfoo bar content foo barfoo bar content foo barfoo bar content foo barfoo bar content foo bar',
    author: 'Piotr Ulanowski',
    title: 'Foo bar foo bar foo',
    subreddit: 'r/subFooBar',
    ups: 34,
    permalink: 'foo.com',
    created: '02.05.2022'
}



const foo_media: media_post_t = {
    type: 'media',
    media: ['https://external-preview.redd.it/t3gkro0wYONVdk01WW8xTLkVo6FC6yp1WymallvOBvU.jpg?auto=webp&s=ec10a83a57a4b4bf5937bef85c2bf676056646ed'],
    author: 'Marcin Mordecki',
    title: 'Kubernetes',
    subreddit: 'r/K8s',
    ups: 123,
    permalink: 'bar.com',
    created: '03.05.2022'
}

const bar_media: media_post_t = {
    type: 'media',
    media: ['https://external-preview.redd.it/t3gkro0wYONVdk01WW8xTLkVo6FC6yp1WymallvOBvU.jpg?auto=webp&s=ec10a83a57a4b4bf5937bef85c2bf676056646ed', 
        'https://external-preview.redd.it/t3gkro0wYONVdk01WW8xTLkVo6FC6yp1WymallvOBvU.jpg?auto=webp&s=ec10a83a57a4b4bf5937bef85c2bf676056646ed'],
    author: 'Marcin Mordecki',
    title: 'Kubernetes',
    subreddit: 'r/K8s',
    ups: 123,
    permalink: 'bar.com',
    created: '03.05.2022'
}

function Home() {
    const { content } = useHome();
    
    return (
        <>
            <div style={ styles.post }>
                <Post post={ foo_html }/>
            </div>
            <div style={ styles.post }>
                <Post post={ foo_media }/>
            </div>
            <div style={ styles.post }>
                <Post post={ foo_html }/>
            </div>
            <div style={ styles.post }>
                <Post post={ bar_media }/>
            </div>
        </>
    );
}
 
export default Home;