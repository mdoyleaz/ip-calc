# api/ipcalc/calc/__init__.py

from flask_restplus import Namespace

api = Namespace('IP Calc', description='IP Subnet Calculator')

from . import resources
