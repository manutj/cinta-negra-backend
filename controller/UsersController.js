const Users=require('../models/Users');

module.exports={
    create:(req,res)=>{
        Users.create(req.body)
        .then(user=>res.status(201).send(user))
        .catch(err=>res.status(400).send({message:'Error creando el usuario',err}));
        },

    find: (req,res)=>{
        Users.find()
        .then(user=>res.status(200).send(user))
        .catch(err=>res.status(404).send({message:'Usuario no encontrado',err}));
        },

    findOne: (req,res)=>{
        Users.findById(req.params.id)
        .then(user=>{res.status(200).send(user)})
        .catch(err=>res.status(404).send({message:'Usuario no encontrado'}))
    },
    
    update: (req,res)=>{
        Users.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then(user=>{res.status(200).send(user)})
        .catch(err=>res.status(404).send({message:'No se pudo actualizar el usuario'}))
    },

    delete: (req,res)=>{
        Users.findByIdAndDelete(req.params.id)
        .then(user=>{res.status(200).send('Usuario eliminado correctamente')})
        .catch(err=>res.status(404).send({message:'Usuario no encontrado'}))
    }
}



    

        