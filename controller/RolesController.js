
const {UsersService} = require('../services');
const {RolesService} = require('../services');

module.exports={
     create: async (req, res) => {
         const { id }  = req.params;
         const { body } = req;
         try {
           const user = await UsersService.findOne(id);
           const role = await RolesService.create(body);
           const userWithRole = await UsersService.addRole(user, role);
           res.status(200).send(userWithRole);
         } catch (err) {
           res.status(400).send({ message: 'Error adding role to user', err }); 
         }
        },

     /*create:(req,res)=>{
         UsersService.findOne(req.params.id)
         RolesService.create(req.body)
         .then((user,role)=>{
             const userWithRole=UsersService.addRole(user,role)
             res.status(201).send(userWithRole);
         })
         .catch(err=>res.status(400).send({ message: 'Error adding role to user', err }))
     }*/
}



    

        