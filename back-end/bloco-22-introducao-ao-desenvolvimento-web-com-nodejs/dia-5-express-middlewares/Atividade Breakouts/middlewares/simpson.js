const fs = require('fs').promises;
const path = './simpson.json'

const readContentFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};

const validation = async (req, res, next) => {
  const { id } = req.body;
  const simps = await readContentFile(path)
  const isValid = simps.some((elem) => elem.id === id)
  isValid ?  res.status(500).json({ message: 'Não é possível cadastrar esse simpson!'}) : next()
}

const validationName = async (req, res, next) => {
  const { name } = req.body;

  if(!name) {
    return res.status(500).json({ message: 'Nome é obrigatório'}) 
  }
  next()
}

const writeContentFile = async (path, content) => {
  try {
    const arrContent = await readContentFile(path);

    arrContent.push(content);
    await fs.writeFile(path, JSON.stringify(arrContent));

    return content;
  } catch (error) {
    return null;
  }
};

module.exports = {
  readContentFile,
  writeContentFile,
  validation,
  validationName
};