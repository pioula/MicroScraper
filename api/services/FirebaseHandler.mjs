import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB30lBZ6THtnBRfpP5Tx0NDS0AazliLFG8",
  authDomain: "scrapperapi-9537d.firebaseapp.com",
  databaseURL: "https://scrapperapi-9537d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scrapperapi-9537d",
  storageBucket: "scrapperapi-9537d.appspot.com",
  messagingSenderId: "848726927936",
  appId: "1:848726927936:web:d5f1c437ae358dcf028da5"

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

export default FirebaseHandler;