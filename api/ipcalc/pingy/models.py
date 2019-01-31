# ipcalc/api/pingy/models.py

# Flask Imports
from flask_restplus import fields

# Local Imports
from . import api

pingy_model = api.model('Pingy', {
    'ip_address': fields.String(required=True, description='IP Address'),
})

pingy_multi_model = api.model('Multi Pingy', {
    'subnet': fields.String(required=True, description='Subnet'),
})
