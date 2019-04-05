var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
        login: String,
        password: String,
        name: String,
        firstname: String,
        mail: String,
        postale: String,
        phone: String,
        activity: String
});

module.exports = mongoose.model('Users', usersSchema);
