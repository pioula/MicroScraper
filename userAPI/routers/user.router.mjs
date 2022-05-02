import { Router } from "express";
import userController from "../controllers/user.controller.mjs";

const userRouter = Router();

userRouter.get("/", userController.getUserPosts);
userRouter.post("/", userController.postNewPost);
userRouter.delete("/", userController.deletePost);

export default userRouter;