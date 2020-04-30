const express=require('express');
const server=express();
const PORT=process.env.PORT || 3002;

server.use(express.urlencoded({extended:true}));
server.use(express.json());

//Endpoints
server.get('/', (req, res) => res.send('Hello World!'))

server.post('/api/v1/movies', (req, res) => res.status(201).send({movies : []}));

server.get('/api/v1/temario/:id', (req, res) => {
console.log(req.query);
res.send('Cool')
});

const Users=require('../models/Users');

//CRUD USUARIOS

//CREATE
server.post('/api/v1/users',(req,res)=>{
Users.create(req.body)
.then(user=>res.status(201).send(user))
.catch(err=>res.status(400).send({message:'Error creando el usuario',err}));
});

//GET ALL
server.get('/api/v1/users',(req,res)=>{
    Users.find()
    .then(user=>res.status(200).send(user))
    .catch(err=>res.status(404).send({message:'Usuario no encontrado',err}));
    });
//Exportar server para requerirlo desde otros archivos
module.exports={server, PORT};


