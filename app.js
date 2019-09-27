require('module-alias/register')

const http = require('http');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
// const userSettingsMW = require('./utilities/middlewares/userSettingMW');
// const errorMW = require('./utilities/middlewares/errorMW');

const port = 3001;
const app = express();
const server = http.createServer(app);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(userSettingsMW);

routes(app);
// app.use(errorMW);

app.get('*', function (req, res, next) {
    res.status(404);
    res.send();
});


server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
