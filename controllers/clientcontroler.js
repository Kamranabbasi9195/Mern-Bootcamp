const clientModel = require('../models/client');

const addClient = (body) =>{
    const doc = new clientModel(body);
    const query = {_id: doc._id};
    return clientModel.findOneAndUpdate(query, doc, {
        upsert: true,
        new: true
    });
};

const updateClient = (body) =>{
    const query = {_id: body._id};
    return clientModel.findOneAndUpdate(query, {
        new:true
    });
};

const delClient = (filter) => {
    return clientModel.findOneAndDelete(filter);
};

const getClient = (filter) => {
    return clientModel.findOne(filter);
};

const getAllClients = (filter) => {
    return clientModel.find();
};

module.exports = {
    addClient,
    updateClient,
    delClient,
    getAllClients,
    getClient
};

