FROM node:11.0.0-alpine AS builder
WORKDIR /app
COPY ./app .
RUN yarn run build

FROM node:11.0.0-alpine
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
