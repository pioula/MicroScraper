import Post from '~/components/Post';
import useScrapData from '~/hooks/useScrapData';

import styles from './styles/styles';

function Home() {
    const { data } = useScrapData();
    
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