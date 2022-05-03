import post_t from "~/services/post_t";

function useUserPosts() {
    function getUserPosts(userId: string) {
        return fetch(`http://localhost:80/user?user=${userId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .catch((err) => { console.log("error, ", err); return []; });
    }

    function udpateUserPosts(userId: string, posts: Array<post_t>) {
        return fetch(`http://localhost:80/user?user=${userId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(posts)
        });
    }

    return { getUserPosts, udpateUserPosts };
}

export default useUserPosts;