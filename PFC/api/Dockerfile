FROM node:11-alpine

WORKDIR /api

COPY package.json ./

RUN npm install -g npm

RUN npm install

RUN npm install -g db-migrate

USER node

COPY . .

CMD ["npm", "run", "dev"]
