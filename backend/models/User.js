const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    fullName:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    profileImageUrl:{type:String, default:null},
},{timestamps:true});

//hash password before saving to database
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

//compare password with hashed password
UserSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};
module.exports = mongoose.model('User', UserSchema);
