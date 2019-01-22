# api/ipcalc/__init__.py

# Flask Imports
from flask import Flask, Blueprint
from flask_restplus import Api

# Local Imports
from config import app_config

# Blueprint Imports
from .calc import calc as calc_blueprint


def create_app(config_name):
    app = Flask(__name__, instance_relative_config=True)
    
    api = Api()
    api.init_app(app)

    app.config.from_object(app_config[config_name])
    app.config.from_pyfile('config.py')

    # Blueprint Registers
    app.register_blueprint(calc_blueprint, url_prefix='/api/calc')

    return app
