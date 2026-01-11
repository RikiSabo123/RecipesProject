const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    const user = req.body
    const { id, firstName, lastName } = user;

    if (!id || !firstName || !lastName) {
        res.status(400).json({ message: 'All fields are required' })
    }
    const myUser = {
        id: user.id,
        firstName: user.firstName,
        lastName:user.lastName
    }
    const myToken = jwt.sign(myUser,process.env.ACCESS_TOKEN_SECRET)
    res.send(myToken)
}