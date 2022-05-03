import React, { useContext } from 'react';
import Post from '~/components/Post';
import UserContext from '~/contexts/userContext';
import styles from './styles/styles';

function Posts() {
    const userContext = useContext(UserContext);

    return (
        <>
            {
                userContext.usersPosts.length === 0 ? 
                    <p>You have got 0 saved posts</p> :
                    userContext.usersPosts.map((post, ind) => 
                        <div style={ styles.post } key={ind}>
                            <Post post={ post }/>
                        </div>
                    )
            }
        </>
    );
}

export default Posts;