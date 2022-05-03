import { useContext, useState } from "react";
import UserContext from "~/contexts/userContext";

function useHeader() {
    const [user, setUser] = useState<string | null>(null);
    const userContext = useContext(UserContext);

    function onSignIn() {
        userContext.signInUser()
            .then((res) => {
                setUser(res);
                userContext.setPosts([]);
            });
    }

    return { user, onSignIn };
}

export default useHeader;