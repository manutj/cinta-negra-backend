const mongoose=require('mongoose');
const MONGO_URI='';

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res)=>{console.log('Conectado a la base de datos')})
.catch(()=>{console.log('Error al conectarse')})

