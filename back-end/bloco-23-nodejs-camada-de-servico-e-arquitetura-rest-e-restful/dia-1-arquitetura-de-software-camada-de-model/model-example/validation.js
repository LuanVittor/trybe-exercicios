const { getAllBooks } = require('./models/Book');

const validateTilte = (req, res, next) => {
  const Allbooks = req.body;
  if (Allbooks.title.length < 3) {
    res.status(400).json({ message: 'Dados inválidos' });
  }
  next()
}

const validateAuthorId = (req, res, next) => {
  const Allbooks = req.body;
  if (!Allbooks.author_id) {
    res.status(400).json({ message: 'Dados inválidos' });
  }
  next();
}

const validateAuthor = async (req, res, next) => {
  const { author_id } = req.body;
  const AllBooks = await getAllBooks();
  console.log(AllBooks)
  const exist = AllBooks.some((elem) => elem.authorId === author_id)
  !exist ? res.status(400).json({ message: 'Dados inválidos' }) : next();
}

module.exports = {
  validateAuthorId,
  validateTilte,
  validateAuthor,
}