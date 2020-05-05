
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
        UsersService.update(req.params.id,req.body)
        .then(user=>{res.status(200).send(user)})
        .catch(err=>res.status(404).send({message:'No se pudo actualizar el usuario'}));
    },

    delete:(req,res)=>{
        UsersService.update(req.params.id,{is_active:false})
        .then(user=>{res.status(200).send('Usuario eliminado correctamente')})
        .catch(err=>res.status(404).send({message:'Usuario no encontrado'}));
    },

    signup:(req,res)=>{
        UsersService.create(req.body)
        .then(user=>res.status(201).send({message:'signup-succesfull',user}))
        .catch(err=>res.status(400).send({message:'Error singup',err}));
        },

    login: async(req,res)=>{
        const { email, password } = req.body;
        try {
            const user = await UsersService.findByEmail(email);
            if (!user) res.status(404).send({ message: 'User not found' });
            console.log('🚀', user);
            const isMatch = UsersService.comparePasswords(password, user.password);
            if (!isMatch) res.status(400).send({ message: 'Invalid credentials' });
            res.status(200).send({ message: "step inside, brother" });
          } catch (error) {
            console.log(error);
            res.status(400).send({ message: 'Error on login', error });
          }
    }
}



    

        