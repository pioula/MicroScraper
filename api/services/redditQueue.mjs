import amqp from 'amqplib/callback_api.js';
import firebaseHandler from './FirebaseHandler.mjs';

function connectToRedditDataQueue() {
    amqp.connect('amqp://10.8.15.120', function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }

            let queue = 'reddit_data_queue';

            channel.assertQueue(queue, {
                durable: false
            });

            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

            channel.consume(queue, function(msg) {
                console.log(" [x] Received %s", JSON.parse(msg.content.toString()));
                firebaseHandler.putData(JSON.parse(msg.content.toString()))
            }, {
                noAck: true
            });
        });
    });
}

export default connectToRedditDataQueue;

