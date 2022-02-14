const router = require('express').Router();
const { readContentFile } = require('../../Atividade 4/helpers/readWriteFile');
const postGreet = require('../middlewares/greeting');
const postName = require('../middlewares/hello');
const { writeContentFile, validation, validationName } = require('../middlewares/simpson');
const path = './simpson.json'

router.get('/ping', (_req, res) => res.status(200).json({message: 'pong!'})
);

router.get('/simpsons' , async(_req, res) => {
  const simpsonss = await readContentFile(path);

  res.status(200).json({ simpsonss })
});

router.get('/simpsons/:id', async (req, res, next) => {
  const { id } = req.params;
  const simp = await readContentFile(path)
  const filterId = simp.find((elem) => elem.id === parseInt(id));

  if (!filterId) {
    return res.status(404).json({ message: 'Simpson not found!' });;
  }
    res.status(200).json(filterId);
})

router.post('/simpsons', validation, validationName, async (req, res) => {
  const newSimp = {
    ...req.body,
  }
  const simp = await writeContentFile(path, newSimp)

  res.status(201).json({ message: 'Simpson criado com sucesso!' });
})

router.post(
  '/user',
  postGreet,
  postName
);

module.exports = router;
