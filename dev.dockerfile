FROM node:lts-alpine

WORKDIR /app
COPY package.json ./
RUN npm --loglevel=error install
EXPOSE 8080

ENTRYPOINT npm run serve
