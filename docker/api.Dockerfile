FROM node:10-alpine
RUN mkdir /app
WORKDIR /app
COPY ./api .
RUN adduser -D -g '' appuser
RUN apk add --no-cache --virtual .gyp python make g++
RUN yarn install
#RUN yarn install --production && yarn cache clean
EXPOSE 3000
CMD ["yarn", "debug"]
