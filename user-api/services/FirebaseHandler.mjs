import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, set, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCvFqWa54N2cBzFXZnIF-KrqzTq1rKVkwI",
  authDomain: "userapi-c1438.firebaseapp.com",
  databaseURL: "https://userapi-c1438-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "userapi-c1438",
  storageBucket: "userapi-c1438.appspot.com",
  messagingSenderId: "11819179651",
  appId: "1:11819179651:web:fab1e5a15c6ac72646c5b6"
};

class FirebaseHandler {
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.database = getDatabase(this.app);
    }

    async updateUsersPosts(user, posts) {
        console.log(user, posts);
        await set(ref(this.database, `users/${user}`), posts);
    }

    async getUsersPosts(user) {
        return await get(child(ref(this.database), `users/${user}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val())
                    return snapshot.val();
                } else {
                    return {};
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const firebaseHandler = new FirebaseHandler();

export default firebaseHandler;