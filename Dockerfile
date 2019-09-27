FROM node:12.6-alpine

ENV NODE_ENV=production

RUN apk update && apk upgrade && apk add --no-cache --virtual builds-deps build-base python gcc musl-dev postgresql-dev
RUN apk add --update nginx findutils
RUN mkdir -p /usr/src/app

COPY package.json /usr/src/app/
WORKDIR /usr/src/app

RUN npm i

# COPY knex /usr/src/app/knex/
# COPY routes /usr/src/app/routes/
# COPY utilities /usr/src/app/utilities/
COPY app.js /usr/src/app/app.js
# COPY charts.js /usr/src/app/charts.js
# COPY .sequelizerc /usr/src/app/.sequelizerc

EXPOSE 3001

CMD ["npm", "run", "start:prod" ]
