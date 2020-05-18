const express=require('express');
const server=express();
const fileupload=require('express-fileupload');
const PORT=process.env.PORT || 3002;
const {errors}=require('celebrate');

server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/',
}));

//Endpoints

server.get('/', (req, res) => res.send('Hello World!'))

server.use('/api/v1',require('../router'))

server.use(errors());
//Exportar server para requerirlo desde otros archivos
module.exports={server, PORT};
