# api/ipcalc/pingy/resources.py

# Flask Imports
from flask import request
from flask_restplus import Namespace, Resource

# Local Imports
from . import api
from .models import pingy_model, pingy_multi_model

# Core Imports
from core.pingy import pingy, pingy_subnet


@api.route('/')
class Pingy(Resource):
    @api.doc('pingy_details')
    @api.expect(pingy_model)
    def post(self):
        '''API endpoint to issue a ping request to a single IP address'''

        ip_address = api.payload['ip_address']

        try:
            response = {'results': pingy(ip_address, verify=True)}
        except ValueError as e:
            response = {'error': str(e)}
            return response, 400
        else:
            return response


@api.route('/multi')
class SpliteSubnet(Resource):
    @api.doc('list_multi_pingy_details')
    @api.expect(pingy_multi_model)
    def post(self):
        '''Provides status of IP's in a specified subnet'''

        subnet = api.payload['subnet']
        try:
            status_list = pingy_subnet(subnet)

            results = {}

            for ip_result in status_list:
                ip_key = ip_result['ipAddress']
                results[ip_key] = ip_result

            response = {'results': results}

        except ValueError as e:
            response = {'error': str(e)}
            return response, 400
        else:
            return response
