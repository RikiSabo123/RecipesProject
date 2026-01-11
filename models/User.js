const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String
    },
    age:{
        type: mongoose.Schema.Types.Number
    },
    city:{
        type: mongoose.Schema.Types.String
    },
    isActive:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Users', usersSchema)