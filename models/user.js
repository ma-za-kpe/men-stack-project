const mongoose = require('mongoose');

var User = mongoose.model('User', {
    firstName: { type: String },
    lastName: { type: String },
});

module.exports = { User };
