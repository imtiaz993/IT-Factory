FROM node:16-alpine

WORKDIR /nextDirecto

COPY package.json yarn.lock ./
COPY public ./public
RUN yarn install

COPY .next ./.next
COPY .env ./env

CMD ["yarn","start"]
