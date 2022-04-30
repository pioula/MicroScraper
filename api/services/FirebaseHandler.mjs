import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBzOjc_6XZSON_c74OVBJH_tdjngJQdUQs",
    authDomain: "scraperapi-aa384.firebaseapp.com",
    databaseURL: "https://scraperapi-aa384-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "scraperapi-aa384",
    storageBucket: "scraperapi-aa384.appspot.com",
    messagingSenderId: "238476094813",
    appId: "1:238476094813:web:bcd516f5aeca77110a8cb4"
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