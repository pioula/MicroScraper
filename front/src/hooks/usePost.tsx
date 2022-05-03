import post_t from "~/services/post_t";

var hash = require("object-hash");

function usePost() {
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

    return { containsPost, convertUps };
}

export default usePost;