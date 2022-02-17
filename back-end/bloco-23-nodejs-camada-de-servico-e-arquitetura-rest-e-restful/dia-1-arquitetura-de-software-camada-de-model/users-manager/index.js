const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/user', async (req, res) => {
  
})

const PORT = 3000;

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });