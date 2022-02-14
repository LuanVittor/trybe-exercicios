// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { isValidToken } = require('./middlewares/validations');
const PORT = 3000;
const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get(
  '/btc',
  isValidToken,
  async (_req, res) => {
    const result = await axios.get(ENDPOINTEXTERNALAPI);

    res.status(200).json(result.data);
  }
);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));