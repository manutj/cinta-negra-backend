const Users=require('../models/Users');
module.exports={
    create:(body)=>Users.create(body),

    find:()=>Users.find(),

    findOne: (id)=>Users.findById(id),
    
    update: (id)=>Users.findByIdAndUpdate(id),
        

    delete: (id)=>Users.findByIdAndDelete(id)
        
    }
