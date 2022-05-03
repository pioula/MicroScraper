import { useState } from "react";

import { getAuth, GoogleAuthProvider, Auth, signInWithPopup, User } from "firebase/auth";

function useGoogleAuth() {
    const [provider, setProvider] = useState<GoogleAuthProvider>(new GoogleAuthProvider());
    const [auth, setAuth] = useState<Auth>(getAuth());
    const [user, setUser] = useState<User>();

    function loginUser() {
        return signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return { user: user, loginUser: loginUser };
}