# ipcalc/api/calc/models.py

# Flask Imports
from flask_restplus import fields

# Local Imports
from . import api

calc_model = api.model('Calc', {
    'subnet': fields.String(required=True, description='IP Subnet'),
})

calc_split_model = api.inherit("Split", calc_model, {
    'split_prefix': fields.Integer
    })
