FROM python:3.7

RUN apt-get update
WORKDIR /ipcalc/api

COPY requirements.txt /ipcalc/api/
RUN pip install -r requirements.txt
RUN pip install gunicorn

ADD . /ipcalc/api
