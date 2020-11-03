const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    position: String,
    name: String,
    company: String,
    date: Date
});

const MERN = mongoose.model('User', UserSchema);


module.exports = MERN;