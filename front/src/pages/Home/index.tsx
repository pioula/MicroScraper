import Post from '~/components/Post';

import useHome from './hooks/useHome';

import styles from './styles/styles';

// const foo_html: html_post_t = {
//     type: 'html',
//     html: 'foo bar content foo barfoo bar content foo barfoo bar content foo barfoo bar content foo barfoo bar content foo bar',
//     author: 'Piotr Ulanowski',
//     title: 'Foo bar foo bar foo',
//     subreddit: 'r/subFooBar',
//     ups: 1234567,
//     permalink: 'foo.com',
//     created: '02.05.2022'
// }

// const foo_media: media_post_t = {
//     type: 'media',
//     media: ['https://external-preview.redd.it/t3gkro0wYONVdk01WW8xTLkVo6FC6yp1WymallvOBvU.jpg?auto=webp&s=ec10a83a57a4b4bf5937bef85c2bf676056646ed'],
//     author: 'Marcin Mordecki',
//     title: 'Kubernetes',
//     subreddit: 'r/K8s',
//     ups: 123456,
//     permalink: 'bar.com',
//     created: '03.05.2022'
// }

// const bar_media: media_post_t = {
//     type: 'media',
//     media: ['https://external-preview.redd.it/t3gkro0wYONVdk01WW8xTLkVo6FC6yp1WymallvOBvU.jpg?auto=webp&s=ec10a83a57a4b4bf5937bef85c2bf676056646ed', 
//         'https://external-preview.redd.it/t3gkro0wYONVdk01WW8xTLkVo6FC6yp1WymallvOBvU.jpg?auto=webp&s=ec10a83a57a4b4bf5937bef85c2bf676056646ed'],
//     author: 'Marcin Mordecki',
//     title: 'Kubernetes',
//     subreddit: 'r/K8s',
//     ups: 99912,
//     permalink: 'bar.com',
//     created: '03.05.2022'
// }

function Home() {
    const { data } = useHome();
    
    return (
        <>
            {
                !data[0] ? 
                    <p>Loading...</p> :
                    data.map((post, ind) => 
                        <div style={ styles.post } key={ind}>
                            <Post post={ post }/>
                        </div>
                    )
            }
        </>
    );
}
 
export default Home;