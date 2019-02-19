# Node/React Production Container
FROM node:latest as frontend

WORKDIR /ipcalc/frontend/
COPY package.json /ipcalc/frontend/

RUN npm install
COPY ./ /ipcalc/frontend/
RUN npm run build

FROM nginx
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=frontend /ipcalc/frontend/build/ /usr/share/nginx/html
