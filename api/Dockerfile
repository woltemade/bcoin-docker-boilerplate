FROM node:10-alpine

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api
COPY . .
RUN npm install -g nodemon
RUN apk add --no-cache --virtual .gyp python make g++
RUN yarn
#RUN yarn install --production && yarn cache clean
EXPOSE ${API_PORT}
CMD ["yarn", "dev"]