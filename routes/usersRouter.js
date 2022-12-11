var express = require('express');
const { request } = require('../app');
var router = express.Router();
const {usersController} = require('../controllers')
/* GET users listing. */

router.get('/',async function(req, res, next) {
  const query = req.query;
  console.log(query)
  try {
    const result = await usersController.getAllUsers(query); 
    res.status(200).send(result);  
  } catch (error) {
    res.status(500).send(error);

  }
});

//post mettods 
  router.post('/',async function(req, res, next) {
  const body = req.body;
  // console.log(query)
  try {
    const result = await usersController.addUser(body); 
    res.status(200).send(result);  
  } catch (error) {
    res.status(500).send(error);

  }

  
});
  // res.send('respond with a resource');

module.exports = router;
