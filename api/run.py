# api/run.py

import os

from flask import render_template
from ipcalc import create_app

config_name = os.getenv('FLASK_CONFIG')
app = create_app(config_name)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
