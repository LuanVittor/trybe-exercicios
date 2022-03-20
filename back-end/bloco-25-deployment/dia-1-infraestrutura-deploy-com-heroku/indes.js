const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Está vivo!!!')
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Escutando na porta ${port}`);