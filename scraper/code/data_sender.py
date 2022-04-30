import sys
import pika
import json


class InvalidResponse(Exception):
    def __init__(self, message):
        self.message = message


# Sends data passed as a dictionary to a given address.
def send_data(data_dict):
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()

    channel.queue_declare(queue='reddit_data_queue')

    channel.basic_publish(exchange='', routing_key='reddit_data_queue', body=json.dumps(data_dict))
    connection.close()

    sys.stdout.write('Reddit data sent.')

    return True
