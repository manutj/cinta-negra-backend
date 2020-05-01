
const {UsersService} = require('../services')
module.exports={
    create:(req,res)=>{
    UsersService.create(req.body)
    .then(user=>res.status(201).send(user))
    .catch(err=>res.status(400).send({message:'Error creando el usuario',err}));
    },

    find:(req,res)=>{
        UsersService.find()
        .then(user=>res.status(200).send(user))
        .catch(err=>res.status(404).send({message:'Usuario no encontrado',err}));
    },

    findOne:(req,res)=>{
        UsersService.findOne(req.params.id)
        .then(user=>{res.status(200).send(user)})
        .catch(err=>res.status(404).send({message:'Usuario no encontrado'}));
    },

    update:(req,res)=>{
        UsersService.update(req.params.id,req.body,{new:true})
        .then(user=>{res.status(200).send(user)})
        .catch(err=>res.status(404).send({message:'No se pudo actualizar el usuario'}));
    },

    delete:(req,res)=>{
        UsersService.delete(req.params.id)
        .then(user=>{res.status(200).send('Usuario eliminado correctamente')})
        .catch(err=>res.status(404).send({message:'Usuario no encontrado'}));
    },
}



    

        