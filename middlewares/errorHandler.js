function errorHandler(err, req, res, next) {
  if (err.name == "SequelizeValidationError") {
    res.status(400).json({ msg: err.errors[0].message })
  }
  else if (err.name == "not found") {
    res.status(404).json({ msg: "data not found !!" })
  }
  else if (err.name == "wrong email or password") {
    res.status(400).json({ msg: err.name })
  }
  else if (err.name == "cannot access") {
    res.status(400).json({ msg: err.name })
  }
  else {
    res.status(500).json(err)
  }
}

module.exports = errorHandler