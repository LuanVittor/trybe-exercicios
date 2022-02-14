const postName = (req, res, next) => {
  const { name } = req.body

  return res.status(201).json({message: `hello ${name}`})
}

module.exports = postName