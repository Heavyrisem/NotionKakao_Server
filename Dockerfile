FROM node:16

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

RUN cat .env

CMD ["yarn", "start:prod"]