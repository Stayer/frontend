FROM node:lts-alpine as build-stage

WORKDIR /app
COPY package.json ./
RUN npm --loglevel=error install
COPY . .

RUN npm run eslint
RUN npm run build

FROM abiosoft/caddy as production-stage
COPY --from=build-stage /app/dist /html

EXPOSE 80 443 2015
