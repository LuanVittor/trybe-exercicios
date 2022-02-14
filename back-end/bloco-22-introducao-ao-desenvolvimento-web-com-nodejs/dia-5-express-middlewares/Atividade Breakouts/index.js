const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const userRouter = require('./routers/userRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json())

app.use('/', userRouter);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));
