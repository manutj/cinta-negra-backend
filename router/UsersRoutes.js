const express =require('express');
const router=express.Router();
const UsersController=require('../controller/UsersController')


//CREATE
router.post('/api/v1/users', UsersController.create);
    
//GET ALL
router.get('/api/v1/users', UsersController.find);

//GET ONE
router.get('/api/v1/users/:id', UsersController.findOne);

//UPDATE
router.patch('/api/v1/users/:id', UsersController.update);

//DELETE
router.delete('/api/v1/users/:id', UsersController.delete);

module.exports=router