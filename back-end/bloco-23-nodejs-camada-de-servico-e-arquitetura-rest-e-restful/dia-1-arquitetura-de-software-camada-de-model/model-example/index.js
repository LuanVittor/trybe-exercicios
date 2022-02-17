const express = require('express');
const bodyParser = require('body-parser');
const { getAll } = require('./models/Author');
const { validateTilte, validateAuthorId, validateAuthor } = require('./validation');
const { create } = require('./models/Book');

const app = express();
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await getAll()

  res.status(200).json(authors);
});

app.post('/books',
  validateTilte,
  validateAuthorId,
  validateAuthor,
  async (req, res) => {
    const { title, author_id } = req.body;
    await create(title, author_id)
    res.status(201).json({ message: 'Livro criado com sucesso! ' })
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});