import { Router } from "express";

import dataController from "../controllers/data.controller.mjs";

const dataRouter = Router();

dataRouter.get('/', dataController.get);

dataRouter.post('/', dataController.post);

export default dataRouter;