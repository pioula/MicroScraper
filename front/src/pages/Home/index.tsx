import { Container, Row } from 'react-bootstrap';
import Post from '~/components/Post';
import { html_post_t } from '~/services/post_t';
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

function Home() {
    const { content } = useHome();
    
    return (
        <>
            <div style={ styles.post }>
                <Post post={ foo_html }/>
            </div>
            <div style={ styles.post }>
                <Post post={ foo_html }/>
            </div>
            <div style={ styles.post }>
                <Post post={ foo_html }/>
            </div>
            <div style={ styles.post }>
                <Post post={ foo_html }/>
            </div>
        </>
    );
}
 
export default Home;