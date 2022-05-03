import { useContext, useState } from "react";
import UserContext from "~/contexts/userContext";
import useUserPosts from "~/hooks/useUserPosts";

function useHeader() {
    const [user, setUser] = useState<string | null>(null);
    const userContext = useContext(UserContext);
    const { getUserPosts } = useUserPosts();

    function onSignIn() {
        userContext.signInUser()
            .then((res) => {
                if (res != null) {
                    setUser(res.displayName);
                    return getUserPosts(res.uid);
                }
                else {
                    return [];
                }
            })
            .then((posts) => {
                userContext.setPosts((posts instanceof Array) ? posts : []);
            })
            .catch((err) => console.log(err));
    }

    return { user, onSignIn };
}

export default useHeader;