# api/ipcalc/__init__.py

# Flask Imports
from flask import Flask, Blueprint
from flask_cors import CORS
from flask_restplus import Api, apidoc

from werkzeug.contrib.fixers import ProxyFix

# Local Imports
from config import app_config

# Namespace Imports
from ipcalc.calc import api as ns_calc
from ipcalc.pingy import api as ns_pingy


def create_app(config_name):
    app = Flask(__name__)
    CORS(app)
    app.wsgi_app = app.wsgi_app

    app.config.from_object(app_config[config_name])
    blueprint = Blueprint('api', __name__, url_prefix='/api')

    api = Api(blueprint,
        title="IP Calc API",
        version="1.0",
        description="API for handling IP calculations",
        doc='/doc/')

    @api.documentation
    def swagger_ui():
        return apidoc.ui_for(api)

    app.register_blueprint(blueprint)

    api.add_namespace(ns_calc, path='/calc')
    api.add_namespace(ns_pingy, path='/pingy')

    return app
