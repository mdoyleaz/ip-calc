# api/ipcalc/calc/resources.py

# Flask Imports
from flask import request
from flask_restplus import Namespace, Resource

# Local Imports
from . import api
from .models import calc_model, calc_split_model

# Core Imports
from api.core.ipcalc import IpCalcVerFour as ipv4calc


@api.route('/')
class SubnetDetails(Resource):
    @api.doc('list_subnet_details')
    @api.expect(calc_model)
    def post(self):
        '''List subnet Details'''

        print(api.payload)
        details = ipv4calc(api.payload['subnet']).__dict__()

        return details


@api.route('/split')
class SpliteSubnet(Resource):
    @api.doc('list_split_details')
    @api.expect(calc_split_model)
    def post(self):
        '''List split prefix and subnet details'''

        sub = ipv4calc(api.payload['subnet'])
        split_list = sub.split_subnet(api.payload['split_prefix'])

        return split_list
