const dataController = {
    get: (req, res) => {
        handler.getData()
            .then((data) => res.status(200).send(data));
    }
}

export default dataController;