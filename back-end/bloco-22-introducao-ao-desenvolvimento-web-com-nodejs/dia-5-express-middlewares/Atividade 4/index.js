const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const teamRouter = require('./routers/teamRouter');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/teams', teamRouter);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));