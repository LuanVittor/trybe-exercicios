const middleError = (err, req, res, _next) => {
  res.status(err.status).json(err.error)
};

module.exports = { middleError };