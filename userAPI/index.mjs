import express from "express";
import userRouter from "./routers/user.router.mjs";

const PORT = process.env.PORT ? process.env.PORT : 80;

const app = express();

app.use(express.json());
app.use("/user", userRouter);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});