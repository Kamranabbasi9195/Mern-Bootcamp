const express = require('express');
const router = express.Router();

const {
  usersController
} = require('../controllers');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const query = req.query;
  console.log(query);
  try {
    const result = await usersController.getAllUsers(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async function(req, res, next) {
  const body = req.body;
  try {
    const result = await usersController.addUser(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

 router.put('/', async function(req, res, next){
  const body = req.body;
  if (!body._id) {
    return res.status(400).send({ message: "_id is required"});
  }
  try {
    const result = await usersController.updateUser(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
 });

 router.delete('/:id', async function(req, res, next){
  const id = req.params.id;
  try {
    const filter = { _id: id };
    const result = await usersController.deleteUser(filter);
    res.status(200).send({ message: 'Deleted Successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
 });



module.exports = router;
