const mongoose=require('mongoose');

const usersSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    is_active:{
        type:Boolean,
        default:true,
    },
});

const Users=mongoose.model('User',usersSchema);
module.exports=Users;