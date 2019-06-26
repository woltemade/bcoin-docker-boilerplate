FROM node:11

ADD ./app/yarn.lock /yarn.lock
ADD ./app/package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /app
ADD ./app /app

EXPOSE 3000
EXPOSE 35729

ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["start"]
# FROM node:11.0.0-alpine AS builder
# WORKDIR /app
# COPY ./app .
# #hot reloading port
# EXPOSE 35729
# RUN yarn && yarn run build
# CMD ["yarn", "start"]
# FROM node:11.0.0-alpine
# RUN yarn global add serve
# WORKDIR /app
# COPY --from=builder /app/build .
# CMD ["serve", "-p", "80", "-s", "."]
