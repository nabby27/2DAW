FROM node:11-alpine

WORKDIR /api

RUN npm install -g npm

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g db-migrate

CMD ["npm", "run", "dev"]
