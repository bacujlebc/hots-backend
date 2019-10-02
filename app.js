require('module-alias/register')

const http = require('http');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./src/routes');
const errorMW = require('./src/utilities/middlewares/errorMW');

const port = 3001;
const app = express();
const server = http.createServer(app);

app.use(logger('dev'));

app.use(
    cors({
      origin: true,
      preflightContinue: false,
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);
app.use(errorMW);

app.get('*', function (req, res, next) {
    res.status(404);
    res.send();
});


server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
