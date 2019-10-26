FROM node:11-alpine

WORKDIR /e2e

RUN npm install -g npm

COPY package*.json ./

RUN npm install

COPY . .
