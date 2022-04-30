import express from "express";
import dataRouter from "./routers/data.router.mjs";
import cors from 'cors';

const app = express();
const port = process.env.PORT ? process.env.PORT : 80;

app.use(express.json());
app.use(cors());

app.use('/data', dataRouter);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});