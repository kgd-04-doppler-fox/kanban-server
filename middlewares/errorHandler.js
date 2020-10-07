function errorHandler(err, req, res, next) {
  if (err.msg === 'unauthorized') {
    res.status(401).json(err)
  } else if (err.msg === 'task not found') {
    res.status(404).json(err)
  } else if (err.msg === 'Wrong email or password') {
    res.status(400).json(err)
  } else if (err.name === 'SequelizeUniqueConstraintError') {
    res.status(400).json({ msg: 'Email has been taken.' })
  } else if (err.name === 'SequelizeValidationError') {
    res.status(400).json({ msg: err.errors[0].message })
  } else {
    res.status(500).json(err)
  }
}

module.exports = errorHandler