import express from "express";
import dataRouter from "./routers/data.router.mjs";
import cors from 'cors';

import amqp from 'amqplib/callback_api.js';

const app = express();
const port = process.env.PORT ? process.env.PORT : 80;

app.use(express.json());
app.use(cors());

app.use('/data', dataRouter);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        let queue = 'hello';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});