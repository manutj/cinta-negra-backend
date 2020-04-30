//obtenemos server y PORT mediante destructuring
//server y PORT vienen del archivo index de la carpeta server
//No es necesario agregar index cuando se solicita con require
const {server,PORT}=require('./server');

//Encendemos el servidor
server.listen(PORT, () => console.log(`Example server listening at http://localhost:${PORT}`))


