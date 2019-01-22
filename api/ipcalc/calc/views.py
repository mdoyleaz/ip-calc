# api/ipcalc/calc/views.py

# Flask Imports
from flask import Flask, jsonify, request
from flask_restplus import Resource

# Local Imports
from . import calc_api

# Utility Imports
from ..utils.ipcalc import IpCalcVerFour


@calc_api.route('/')
class TodoSimple(Resource):
    def get(self):
        print(resource.form)
        return "Hi"

    def put(self, subnet, prefix):
        return {'details': f'{subnet}/{prefix}' }
