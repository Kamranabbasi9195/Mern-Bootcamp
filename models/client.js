const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    dob:{
        type: Date,
        required:true
    }
},{collection: 'clients'});

module.exports = mongoose.model('clients',clientSchema);

