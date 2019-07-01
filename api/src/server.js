const express = require('express');
const bodyParser = require('body-parser');
var debug = require('debug')('api:server');
const cors = require('cors');
var logger = require('morgan');

const config = {
    name: 'bcoin api',
    port: process.env.PORT || '3001',
    host: '0.0.0.0',
};

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

app.use("/wallet", require("./routes/wallet"));
app.use("/chain", require("./routes/chain"));

app.get('/', (req, res) => {
    res.status(200).send('bcoin api.');
});

app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }

    debug(`${config.name} running on ${config.host}:${config.port}`);
});