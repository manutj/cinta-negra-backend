const express=require('express');
const server=express();
const PORT=process.env.PORT || 3002;

//Endpoints
server.get('/', (req, res) => res.send('Hello World!'))

server.post('/api/v1/movies', (req, res) => res.status(201).send({movies : []}));

server.get('/api/v1/temario/:id', (req, res) => {
console.log(req.query);
res.send('Cool')
});

//Exportar server para requerirlo desde otros archivos
module.exports={server, PORT};


