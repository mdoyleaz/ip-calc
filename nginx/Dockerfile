FROM nginx

RUN rm -rf /etc/nginx/conf.d/default.conf

ADD . /etc/nginx/
RUN mkdir /etc/nginx/sites-enabled
RUN ln -s /etc/nginx/sites-available/* /etc/nginx/sites-enabled/
