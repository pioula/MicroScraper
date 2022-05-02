import express from "express";

const PORT = process.env.PORT ? process.env.PORT : 80;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});