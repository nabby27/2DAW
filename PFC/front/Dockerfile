FROM node:11-alpine

WORKDIR /front

RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

RUN npm install -g npm

RUN npm install -g @angular/cli

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
