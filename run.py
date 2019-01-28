# api/run.py

import os

from flask import render_template
from api.ipcalc import create_app

config_name = os.getenv('FLASK_CONFIG')
app = create_app(config_name)


if __name__ == '__main__':
    @app.route('/')
    def index():
        return render_template("index.html")
    app.run()
