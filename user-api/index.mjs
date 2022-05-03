import express from "express";
import userRouter from "./routers/user.router.mjs";
import cors from 'cors';

const PORT = process.env.PORT ? process.env.PORT : 80;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
