FROM node:11-alpine

WORKDIR /e2e

COPY package.json ./

RUN npm install -g npm

RUN npm install

COPY . .
