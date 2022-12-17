const { adminModel } = require('../models');

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
    return adminModel.findOneAndUpdate(query, body, {
        new:true
    });
};

const deleteAdmin = (filter) => {
    return adminModel.findOneAndDelete(filter);
};

const getAdmin = (filter) =>{
    return adminModel.findOne(filter);
};

const getAllAdmins = (filter) =>{
    return adminModel.find(filter);
};

module.exports = {
    addAdmin, 
    updateAdmin,
    deleteAdmin,
    getAdmin,
    getAllAdmins
};