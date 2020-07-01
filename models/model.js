const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    age: Number,
    gender: String,
    lookingfor: String,
    profilepicture: String,
    hobbies: [String],
    liked: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    disliked: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    matches: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

const UserModel = mongoose.model('User', User);

module.exports = UserModel;