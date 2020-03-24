FROM node:10.19-alpine

ADD public/ /app
ADD src/ /app
COPY package.json /app
COPY package-lock.json /app

WORKDIR /app

RUN npm install
COPY . /app

CMD npm run start


