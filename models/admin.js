const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
},{collection: 'admins'});

module.exports = mongoose.model('admins',adminSchema);

