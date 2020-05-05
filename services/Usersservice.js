const Users=require('../models/Users');
const bcrypt = require('bcrypt');
module.exports={
    create:(body)=>Users.create(body),

    find:()=>Users.find({is_active:true}),

    findOne: (id)=>Users.findById(id),
    
    update: (id,body)=>Users.findByIdAndUpdate(id,body,{new:true}),
        

    delete: (id)=>Users.findByIdAndDelete(id),

    findByEmail:(email)=>Users.findOne({email}),

    comparePasswords:(candidatePassword, password) => {
        console.log('🌎', candidatePassword, password);
        return bcrypt.compareSync(candidatePassword, password);
      }
        
    }
