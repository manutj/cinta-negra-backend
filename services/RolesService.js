const {Roles}=require('../models/Roles');
module.exports={
    create:(body)=>Roles.create(body)

    // find:()=>Users.find({is_active:true}),

    // findOne: (id)=>Users.findById(id),
    
    // update: (id,body)=>Users.findByIdAndUpdate(id,body,{new:true}),
        

    // delete: (id)=>Users.findByIdAndDelete(id),

    // findByEmail:(email)=>Users.findOne({email}),

    // comparePasswords:(candidatePassword, password) => {
    //     return bcrypt.compareSync(candidatePassword, password);
    //   }
        
    }
