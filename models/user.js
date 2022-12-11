const mongoose = require('mongoose'); //relation between node js and mongo db or express
const usersSchema= new mongoose.Schema({ // creating a object of userschema
    userName:{ type: String,
        required:true,
        unique: true
    },
    Password : { type: String,
        required:true

    }, // two column i.e username and password
    userType:
    {kind:
        {type:String ,
            enum:['admin','client']
        },
    item:
    {type: mongoose.Types.ObjectId,//connect to different modekls as a primary key
        refPath:'userType.kind'}, //Refpath is used when there are multiple users

}   

},
{
collection:'users'
});
//user will be the name of table 
module.exports = mongoose.model('users',usersSchema); //maps scheema to mongo db scheema 
