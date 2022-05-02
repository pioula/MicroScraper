import firebaseHandler from "../services/FirebaseHandler.mjs";

const userController = {
    getUsersPosts: (req, res) => 
        firebaseHandler.getUsersPosts(req.query.user)
            .then((posts) => res.status(200).send(posts))
            .catch((err) => console.log(err)),
    updateUsersPosts: (req, res) =>
        firebaseHandler.updateUsersPosts(req.body.user, req.body.posts)
            .then(() => res.status(200).send("OK")),
};

export default userController;