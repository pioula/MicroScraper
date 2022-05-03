import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBYjEyzfZnEXlQzPyQo-kw_AaY4C0hO9rA",
  authDomain: "scraperapi-41f23.firebaseapp.com",
  databaseURL: "https://scraperapi-41f23-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scraperapi-41f23",
  storageBucket: "scraperapi-41f23.appspot.com",
  messagingSenderId: "131094411113",
  appId: "1:131094411113:web:6a8a8b1f6b8ff776d5eff8"
};

class FirebaseHandler {
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.database = getDatabase(this.app);
    }

    async putData(data) {
        await set(ref(this.database, 'data/'), data);
    }

    async getData() {
        return await get(child(ref(this.database), `data`))
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