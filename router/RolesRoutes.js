const express =require('express');
const router=express.Router();
const RolesController=require('../controller/RolesController')
const { RolesValidator } = require('../validators')

//CREATE
router.post('/users/:id/roles', RolesValidator.create, RolesController.create);
    
//GET ALL
//router.get('/users/:id/roles', RolesController.find);

//UPDATE
//router.patch('/users/:id/roles/:idRole', RolesValidator.update, RolesController.update);

//DELETE
//router.delete('/users/:id/roles/:idRole', RolesController.delete);



module.exports=router