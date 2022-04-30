import { Router } from "express";

import dataController from "../controllers/data.controller.mjs";

const dataRouter = Router();

dataRouter.get('/', dataController.get);

dataRouter.put('/', dataController.put);

export default dataRouter;