FROM node:14.4.0-alpine3.12 as build

RUN apk add --no-cache bash

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY ./frontend/package*.json ./

USER node

RUN npm ci --only=production

COPY --chown=node:node ./frontend/ .

COPY --chown=node:node ./mocks/ .

RUN npm run build

FROM nginx:1.19.1-alpine

COPY --from=build /home/node/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
