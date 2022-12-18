const {
    usersController,
    adminsController,
    clientsController
} =  require('../controllers');
//apply validation
const signup = async (body) => {
    //
    //apply validation
    if (! body.userName) {
        return Promise.reject({ error: "userName is required"}); 
    }
    if (! body.password) {
        return Promise.reject({ error: "Password is required"});    
    }
    if (! body.userType) {
        return Promise.reject({ error: "userType is required"});    
    }
    if (! body.data) { // data represent public info of the user
        return Promise.reject({ error: "data is required"});    
    }
    try{
        let result = null;
        const userType = body.userType;
        switch (userType) {
            case 'admin':
                //apply client fields validation here
                result = await clientController.addAdmin(body.data);                
                break;
                case 'client':
                    //apply client fields validation here
                    result = await adminsController.addAdmin(body.data);
                    break;
        
            default:
                return Promise.reject({ error: "userType is invalid"});
        }
     const userJson ={
        userName: body.userName,
        password: body.password,
        userType:{
            kind:userType,
            item:result._id
        }
     };
    const user = await usersController.addUser(userJson);
    return user;
    }
    catch(ex){
    return Promise.reject({error:ex});
}
}
module.exports={
    signup
}


    

