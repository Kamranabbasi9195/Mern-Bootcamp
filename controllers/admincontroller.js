const adminModel = require('../models/admin');
const { findOneAndDelete, findOne } = require('../models/user');

const addAdmin = (body) => {
    const doc = new adminModel(body);
    const query = {_id: doc._id};
    return adminModel.findOneAndUpdate(query, doc,{
        upsert: true,
        new:true
    });
};

const updateAdmin = (body) =>{
    const query = {_id: body._id};
    return adminModel.findOneAndUpdate(query, {
        new:true
    });
};

const delAdmin = (filter) => {
    return adminModel.findOneAndDelete(filter);
};

const getAdmin = (filter) =>{
    return adminModel.findOne(filter);
};

const getAllAdmins = (filter) =>{
    return adminModel.find();
};

module.exports = {
    addAdmin, 
    updateAdmin,
    delAdmin,
    getAdmin,
    getAllAdmins
};