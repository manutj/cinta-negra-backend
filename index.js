//obtenemos app y PORT mediante destructuring
//app y PORT vienen del archivo index de la carpeta server
//No es necesario agregar index cuando se solicita con require
const {app,PORT}=require('./server');

//Encendemos el servidor
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))