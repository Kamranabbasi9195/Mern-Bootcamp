const{userModel} = require('../models');
// add uswer 

const addUser = (body) => {
    const doc = new userModel(body); //created a instance of table
    const query ={_id: doc._id};
    return userModel.findOneAndUpdate(query, doc,{
        upsert: true,
        new:true

    });
};

//module.exports ={
    //addUser

//}

//update data 

const updateUser = (body)=> {
    //const doc = new usermodel(body); // created a instance of table //no need to convert model now as it is the old records
    const query = {_id: body._id};
    return userModel.findOneAndUpdate(query, body, {
        new:true, //new updated data, latest record return

    });
};
// deleting the data 
const deleteUser = (filter) => {
    //arrow function
    //const doc = new usermodel(body); // created a instance of table //no need to convert model now as it is the old records
    return userModel.deleteOne(filter);

    };
//for one user 
const getUser =(filter) =>{
    return userModel.find(filter);
};

    //get all user medod
    const getAllUsers =(filter) =>{
        return userModel.find(filter);
    };

    module.exports ={
        addUser,
        updateUser,
        deleteUser,
        getAllUsers,
        getUser,
    };







