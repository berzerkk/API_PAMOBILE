FROM node:7

LABEL description='Api'
RUN mkdir /app
WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000
