FROM node:10.19-alpine

ADD public/ /app
ADD src/ /app
ADD views/ /app
COPY package.json /app
COPY package-lock.json /app
COPY secrets.js /app

WORKDIR /app
RUN npm install

COPY . /app

CMD npm run dev
