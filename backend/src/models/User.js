const mongose = require('mongoose')


const UserSchema = new mongose.Schema({
    email: String,
});

module.exports = mongose.model('User', UserSchema);