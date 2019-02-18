# Node/React
FROM node

WORKDIR /ipcalc/frontend/
COPY package.json /ipcalc/frontend/

RUN npm install
COPY ./ /frontend/
RUN npm run build
