const mongoose = require('mongoose')

var Todo = mongoose.model('Todo', {
    text : {    
        type: String,
        required: true,
        minlength: 1,
        //removes trailing and leading spaces
        trim: true
    },

    completed : {
        type: Boolean,
        default : false
    },

    completedAt: {
        type: Number,
        default: null 
    }
});

module.exports = {Todo}