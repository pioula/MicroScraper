import { useContext } from "react";
import UserContext from "~/contexts/userContext";
import useUserPosts from "~/hooks/useUserPosts";
import post_t from "~/services/post_t";

var hash = require("object-hash");

function usePost() {
    const userContext = useContext(UserContext);

    const { udpateUserPosts } = useUserPosts();

    function convertUps(ups: number): string {
        if (ups < 1000)
            return `${ups}`;
        else if (ups < 1_00_000) 
            return `${(ups / 1000).toFixed(1)}k`;
        else if (ups  < 1_000_000)
            return `${(ups / 1000).toFixed()}k`;
        else
            return `${(ups / 1_000_000).toFixed()}m`
    }

    function comparePosts(a: post_t, b: post_t) {
        return hash(a) === hash(b);
    }

    function containsPost(posts: Array<post_t>, post: post_t) {
        return posts.reduce((acc, arrPost) => comparePosts(arrPost, post) || acc, false);
    }
    
    function handleAdd(post: post_t) {
        if (userContext.usersPosts.length >= 10) {
            alert("You can only save up to 10 posts!");
        }
        else {
            udpateUserPosts(userContext.auth.currentUser!.uid, [post].concat(userContext.usersPosts));
            userContext.setPosts([post].concat(userContext.usersPosts));
        }
    }

    function handleRemove(post: post_t) {
        let newPosts = userContext.usersPosts.filter((usersPost) => !comparePosts(usersPost, post));
        udpateUserPosts(userContext.auth.currentUser!.uid,
            newPosts);
        userContext.setPosts(newPosts);
    }

    return { containsPost, 
        convertUps, 
        handleAdd, 
        handleRemove, 
        currentUser: userContext.auth.currentUser, 
        usersPosts: userContext.usersPosts };
}

export default usePost;