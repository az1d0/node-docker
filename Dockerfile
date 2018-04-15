FROM node:9.10.1
EXPOSE 3000

WORKDIR /app

ADD package.json /app/
RUN npm install

ADD . /app

CMD ["node", "server"]