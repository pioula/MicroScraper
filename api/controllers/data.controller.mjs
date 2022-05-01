import firebaseHandler from "../services/FirebaseHandler.mjs";

const dataController = {
    get: (req, res) => {
        firebaseHandler.getData()
            .then((data) => res.status(200).send(data));
    }
}

export default dataController;