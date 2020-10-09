function errorHandler (err, req, res, next) {
    console.log('error dari handler', err)
    if (err.name === "SequelizeValidationError") {
        res.status(400).json({ msg: err.errors[0].message })
    } else if (err.name === "ERROR 404 Not Found") {
        res.status(404).json({ msg : `${err.name}` })
    } else if (err.name === "Wrong Email / Password") {
        res.status(401).json({ msg : `${err.name}` })
    } else if (err.name === "SequelizeUniqueConstraintError") {
        res.status(300).json({ msg: err.errors[0].message })
    } else {
        res.status (500).json(err)
    }
}

module.exports = errorHandler