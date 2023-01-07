//import jwt
//sign is used for signing token and verity is for verifying token
const { sign, verify } = require('jsonwebtoken');
const { signup } = require('../beans/common');
const { usersControllers, adminControllers } = require('../controllers');
//const {user} = require('../models/users');

//executelogin function
const executeLogin = async (username, password, cb) => {
  //cb is callback function
  try {
    const filter = { userName: username, password: password };
    const user = await usersControllers.getUser(filter);
    if (!user) {
      return cb(null, false);
    }
    //nu
    return cb(null, user);
  } catch (error) {
    return cb(error, false);
    //if you find then null and false return
  }
};
//generatetoken function
const generateToken = async (req, res, next) => {
  const user = req.user;

  //const token = sign({ user: user.id });
  const json = {
    _id: user._id,
  };
  const token = sign({ user: json }, 'someSecretvalue');
  req.token = token;
  next();
};

//response function
const respond = async (req, res, next) => {
  //if public information is available then use these comments lines otherwise use populate method
  // const userType = user.userType.kind;
  // const item = user.userType.item;
  // let data=null;
  // if(userType === 'admin') {
  //   data=adminControllers.getAdmin({_id:item});
  // }
  // if(userType === 'client'){
  //   data=clientControllers.getClient({_id:item});
  // }
  const user = req.user;
  const result = { token: req.token, user: user.userType.item };
  res.status(200).send(result);
};

//signup function
const userSignup = async (req, res, next) => {
  const body = req.body;
  //promise is used when we want to send data to other functions/files
  try {
    const result = await signup(body);
    res.status(200).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};
module.exports = {
  userSignup,
  executeLogin,
  generateToken,
  respond,
};