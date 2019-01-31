# api/ipcalc/pingy/__init__.py

from flask_restplus import Namespace

api = Namespace('Pingy', description='Pingy Tool')

from . import resources
