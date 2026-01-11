const jwt = require('jsonwebtoken')

const catchErr = (err, req, res, next) => {
    console.log("Ooops! terible error!");
    res.status(500).send("err!")
}


module.exports =catchErr
    
