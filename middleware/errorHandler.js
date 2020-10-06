function errorHandler (err, req, res, next){
    if (err.name === `Task not found`){
        res.status(400).json(err.name)
    }
    else if (err.name === `email/password is wrong`){
        res.status(401).json(err.name)
    }
}

module.exports = errorHandler