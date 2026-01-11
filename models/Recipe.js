const mongoose = require('mongoose')
const recipesSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    time: {
        type: mongoose.Schema.Types.Number
    },
    ingredients:{
        type: mongoose.Schema.Types.Array
    },
    category:{
        type: mongoose.Schema.Types.String
    },
    isFavorite:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('recipe', recipesSchema)