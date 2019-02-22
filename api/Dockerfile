FROM python:3.7

RUN apt-get update
WORKDIR /ipcalc/api

ADD . /ipcalc/api

RUN pip install -r requirements.txt
RUN pip install gunicorn
