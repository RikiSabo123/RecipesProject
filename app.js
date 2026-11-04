require('dotenv').config();
const mongoose = require('mongoose')

const connectDB = require("./config/db")

const express = require('express')
const app = express()
const catchErr = require('./middleware/errMiddlware')
connectDB()

app.use(express.json())

const recipeRouts = require('./routes/recipeRoutes')
const authRouts = require('./routes/authRoutes')

app.use('/recipes', recipeRouts)
app.use('/users', authRouts)

// Error handler must be registered after the routes
app.use(catchErr);


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})