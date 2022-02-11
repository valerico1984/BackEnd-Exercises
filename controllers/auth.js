const Usuario=require('../models/usuario')
const bcryptjs=require('bcryptjs');
const {generarJWT}= require('../helpers/generarJWT')

const login= (req, res)=>{

    res.status(200).json({
        msg:'RUTA LOGIN, TOMA EL JWT'
    })

}

module.exports={login}