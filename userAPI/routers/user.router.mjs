import { Router } from "express";
import userController from "../controllers/user.controller.mjs";

const userRouter = Router();

userRouter.get("/", userController.getUsersPosts);
userRouter.put("/", userController.updateUsersPosts);

export default userRouter;