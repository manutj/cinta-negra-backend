const express =require('express');
const router=express.Router();
const Users=require('../models/Users');

//CREATE
router.post('/api/v1/users',(req,res)=>{
    Users.create(req.body)
    .then(user=>res.status(201).send(user))
    .catch(err=>res.status(400).send({message:'Error creando el usuario',err}));
    });
    
    //GET ALL
    router.get('/api/v1/users',(req,res)=>{
        Users.find()
        .then(user=>res.status(200).send(user))
        .catch(err=>res.status(404).send({message:'Usuario no encontrado',err}));
        });

        //GET ONE
router.get('/api/v1/users/:id',(req,res)=>{
    Users.findById(req.params.id)
    .then(user=>{res.status(200).send(user)})
    .catch(err=>res.status(404).send({message:'Usuario no encontrado'}))
});

//UPDATE
router.patch('/api/v1/users/:id',(req,res)=>{
    Users.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then(user=>{res.status(200).send(user)})
    .catch(err=>res.status(404).send({message:'No se pudo actualizar el usuario'}))
});

//DELETE
router.delete('/api/v1/users/:id',(req,res)=>{
    Users.findByIdAndDelete(req.params.id)
    .then(user=>{res.status(200).send('Usuario eliminado correctamente')})
    .catch(err=>res.status(404).send({message:'Usuario no encontrado'}))
});

        module.exports=router