import FirebaseHandler from "../services/FirebaseHandler.mjs";

const handler = new FirebaseHandler();

const dataController = {
    get: (req, res) => {
        handler.getData()
            .then((data) => res.status(200).send(data));
    },
    put: (req, res) => {
        handler.putData(req.body)
            .then(() => res.status(200).send("OK"));
    }
}

export default dataController;