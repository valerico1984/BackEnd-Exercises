const express= require('express');
const cors= require('cors');

class Server {
//constructor
constructor(){
    this.app= express();
    this.port= 8080;
    this.usuariosPath='/api/sumar'
    this.middlewares();
    this.routes();

}

middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
}

routes(){
    this.app.use(this.usuariosPath, require('../routes/sumar'))

}


listen(){
    this.app.listen(this.port, ()=>{
        console.log('Servidor corriendo en puerto 8080')
    })
}

}
module.exports = Server;
