import FirebaseHandler from "../services/FirebaseHandler.mjs";

const handler = new FirebaseHandler();

const dataController = {
    get: (req, res) => { 
        handler.getData()
            .then((data) => res.status(200).send(data));
    },
    put: (req, res) => { 
        handler.putData();
        res.status(200);
    }
}

export default dataController;