function errorHandler (err, req, res, next) {
    if (err.name === "SequelizeValidationError"){
        res.status(400).json({msg: err.errors[0].message})
    } else if (err.name === "SequelizeUniqueConstraintError"){
        res.status(400).json({msg: "Email already used"})
    } else if (err.notFound === "error not found"){
        res.status(404).json({ error : "Error Not Found" })
    } else if (err.name === "unauthorized access") {
        res.status(401).json({msg:err.name})
    } else if (err.message === "Wrong email/password"){
        res.status(401).json({msg:err.message})
    } else {
        res.status(500).json(err)
    }
}

module.exports = errorHandler