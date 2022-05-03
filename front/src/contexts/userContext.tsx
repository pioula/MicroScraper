import React from "react";

import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider,  signInWithPopup } from "firebase/auth";
import post_t from "~/services/post_t";


const firebaseConfig = {
  apiKey: "AIzaSyCvFqWa54N2cBzFXZnIF-KrqzTq1rKVkwI",
  authDomain: "userapi-c1438.firebaseapp.com",
  databaseURL: "https://userapi-c1438-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "userapi-c1438",
  storageBucket: "userapi-c1438.appspot.com",
  messagingSenderId: "11819179651",
  appId: "1:11819179651:web:fab1e5a15c6ac72646c5b6"
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

function signInUser() {
    return signInWithPopup(auth, provider)
        .then((result) => result.user.displayName)
        .catch((error) => {
            console.log(error);
            return null
        });
}

export let userContextContent = {
    auth,
    provider,
    signInUser,
    usersPosts: [] as Array<post_t>,
    setPosts: (v: Array<post_t>) => {} 
}

const UserContext = React.createContext(userContextContent);

export default UserContext;