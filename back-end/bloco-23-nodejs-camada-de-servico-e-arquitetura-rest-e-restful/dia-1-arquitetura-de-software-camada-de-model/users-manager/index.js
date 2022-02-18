const express = require('express');
const bodyParser = require('body-parser');
const { validateName, validatePassword, validateEmail } = require('./validation');
const { create } = require('./models/User');

const app = express();

app.use(bodyParser.json());

app.post('/user',
  validateName,
  validatePassword,
  validateEmail,
 async (req, res) => {
  // const { firstName, lastName, email, password } = req.body;
  console.log(req.body)
  // await create(firstName, lastName, email, password);
  res.status(201).json({ message: " Usario criado com sucesso" });
})

const PORT = 3000;

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });