## Available Scripts

In the project directory, you can run:


### setup

1 - install Docker, node
2 - run Docker
3 - npm i
4 - pgcli


Run Postgre in docker and init DBs
```
$ docker-compose up -d
$ docker exec -it hots_postgres psql -U postgres -c "create database hots_db"

npm run db:migrate
npm run db:seed

```

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console..

to create migration
npx knex --knexfile=src/knex/hots_db/knex.config.js migrate:make tour

### 'postgres'
To connect to postgres in Docker
localhost : 54320
initialDB : postgres
username : postgres
password : 

password is empty

### pgcli
to open postgres db view
pgcli -h localhost -p 54320 -U postgres -d hots_db