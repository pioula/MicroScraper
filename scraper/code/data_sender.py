import requests
import sys


class InvalidResponse(Exception):
    def __init__(self, message):
        self.message = message


# Sends data passed as a dictionary to a given address.
def send_data(address, data_dict):
    response = requests.put(address, json=data_dict)
    sys.stdout.write("Received response: " + str(response))

    if response.status_code != 200:
        raise InvalidResponse("Received response: " + str(response.status_code) + "!")
    return True


def send_to_localhost(data_dict):
    try:
        send_data('http://localhost:80/data', data_dict)
    except InvalidResponse:
        sys.stderr.write('Unable to send data to local!')
        return False
    sys.stdout.write('Data upload finished')
    return True
