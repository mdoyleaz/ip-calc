# api/ipcalc/calc/__init__.py

from flask import Blueprint
from flask_restplus import Api


calc = Blueprint('calc', __name__)
calc_api = Api(calc)


from . import views
