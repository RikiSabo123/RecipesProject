const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    const { id, firstName, lastName } = req.body;

    if (!id || !firstName || !lastName) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const payload = { id, firstName, lastName }
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
    res.json({ accessToken: token })
}
