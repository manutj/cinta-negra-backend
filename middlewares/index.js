const jwt=require('jsonwebtoken');

module.exports={
    verifyToken:(req,res,netx)=>{
        try{
          const {authorization}=req.headers;
          //Authorization contiene:"Bearer token";
          const token=authorization.split(" ")[1];
          const decoded=jwt.verify(token, process.env.JWT_SECRET);
          req.decoded=decoded;
          netx();  
        }catch(error){
            res.status(403).send({error})
        }
    }
}