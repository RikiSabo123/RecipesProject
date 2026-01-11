require('dotenv').config();
const mongoose = require('mongoose')

const connectDB = require("./config/db")

const express = require('express')
const app = express()
const catchErr = require('./middleware/errMiddlware')
connectDB()

app.use(express.json())
app.use(catchErr);

const recipeRouts = require('./routes/recipeRoutes')
const authRouts = require('./routes/authRoutes')

app.use('/recipes', recipeRouts)
app.use('/users', authRouts)


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(3000, () => console.log(`Server running on port 3000`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})