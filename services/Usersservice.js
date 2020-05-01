const Users=require('../models/Users');
module.exports={
    create:(body)=>Users.create(body),

    find:()=>Users.find({is_active:true}),

    findOne: (id)=>Users.findById(id),
    
    update: (id,body)=>Users.findByIdAndUpdate(id,body,{new:true}),
        

    delete: (id)=>Users.findByIdAndDelete(id)
        
    }
