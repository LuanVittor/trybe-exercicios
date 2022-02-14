const postGreet = (req, res, next) => {
  const { age } = req.body

  if (age < 18) {
    return res.status(401).json({message: `Unauthorized`})
  }
  next()
  // return res.status(201).json({message: `hello ${name}`})

}

module.exports = postGreet