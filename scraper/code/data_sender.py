import sys
import pika
import json

RABBIT_DNS = 'scraper-rabbitmq-service.scraper'


# Sends data passed as a dictionary to a given address.
def send_data(data_dict):
    print('Setting up conntection with RabbitMQ')
    try:
        connection = pika.BlockingConnection(
            pika.ConnectionParameters(host=RABBIT_DNS))
    except pika.exceptions.AMQPConnectionError:
        sys.stderr.write('Unable to connect to RabbitMQ')
        sys.exit(1)

    print('Connection set up')
    channel = connection.channel()
    channel.queue_declare(queue='reddit_data_queue')
    print('Queue declared')

    channel.basic_publish(exchange='', routing_key='reddit_data_queue', body=json.dumps(data_dict))
    connection.close()

    print('Reddit data sent.')

