const validateName = (req, res, next) => {
  const { firstName, lastName } = req.body
  if (firstName.length > 3 || lastName.length > 3) {
    return next()
  }
  next({ statusCode: 404, message:{ "error": true, "message": "O campo 'nome' deve ter pelo menos 3 caracteres"} })
}

const validatePassword = (req, res, next) => {
  const { password } = req.body
  if (password.length >= 6) {
    return next()
  }
  next({ statusCode: 404, message:{ "error": true, "message": "O campo 'password' deve ter pelo menos 6 caracteres"} })
}

const validateEmail = (req, res, next) => {
  const { email } = req.body
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(email.match(regEx)) {
    next()
  }
  next({ statusCode: 404, message:{ "error": true, "message": "O campo 'email' deve ser valido"} })
}

module.exports = {
  validateEmail,
  validateName,
  validatePassword,
}