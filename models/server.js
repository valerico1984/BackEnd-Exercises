const express= require('express');
const cors= require('cors');
const { dbConnection } = require('../database/config');



class Server {
//constructor
constructor(){
    this.app= express();
    this.port= 8080;
    this.usuariosPath='/api/usuarios'
    this.authPath='/api/auth'
    this.productsPath='/api/productos'
    this.middlewares();
    this.routes();
    this.conectarDB();

}

middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
}

routes(){
    this.app.use(this.usuariosPath, require('../routes/usuarios')),
    this.app.use(this.productsPath, require('../routes/producto')),
    this.app.use(this.authPath, require('../routes/auth'))
}

async conectarDB(){
    await dbConnection()
}
listen(){
    this.app.listen(this.port, ()=>{
        console.log('Servidor corriendo en puerto 8080')
    })
}

}
module.exports = Server;
