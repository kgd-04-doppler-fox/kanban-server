function errorHandler(err, req, res, next){
    console.log(err)
    if (err.name === "SequelizeValidationError"){
        res.status(400).json({msg: err.errors[0].message})
    }
    else if (err.name === "not found"){
        res.status(404).json({msg: err.name})
    }
    else if (err.name === "Wrong email / password"){
        res.status(400).json({msg: err.name})
    }

    else if (err.name === "invalid access"){
        res.status(401).json({msg: err.name})
    }

    else if (err.name === "SequelizeUniqueConstraintError"){
        res.status(400).json({msg: 'email already use'})
    }
    else{
        res.status(500).json({msg: "internal server error"})
    }
}

module.exports = errorHandler