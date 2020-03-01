const mongoose = require('mongoose')

var User = mongoose.model('User', {
    email: {
        type: String,
        trime: true,
        minlength: 1,
        require:true
   } 
});

module.exports = {User}
