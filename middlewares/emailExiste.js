const Usuario= require ('../models/usuario')

const emailExiste= async (correo='')=>{
    const existeMail= await Usuario.findOne(correo)
    if (existeMail){
        throw new Error(`El correo ${correo} ya está registrado en la base de datos`)
    }
}

module.exports={emailExiste}