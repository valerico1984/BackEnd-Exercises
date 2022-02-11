const Usuario = require("../models/usuario");
const bcrypt = require('bcryptjs')


const usuariosGet = async (req, res) =>{

    const {limite= 5, desde=0} = req.query

    const parametros= {estado: true}

    const [total, usuarios]= await Promise.All([
        Usuario.countDocuments(parametros),
        Usuario.find(parametros)
        .skip(Number(desde))
        .limit(Number(limite))
    ])
        
    res.status(200).json({
        total,
        usuarios    
    })
    
    }

const usuariosPost = async (req, res) =>{
        
        const {nombre,password, correo, rol}= req.body;
        const usuario= new Usuario({nombre,correo,password,rol})
        await usuario.save()

        const salt=bcrypt.genSaltSync()
        usuario.password=bcrypt.hashSync(password,salt)

        res.status(200).json({
            msg:'OK POST',
            usuario
        })
    }
    
    const usuariosPut = async (req, res) =>{
            const {id}= req.params

            const {_id,password,google,...resto}= req.body

            const usuario= await Usuario.findByIdAndUpdate(id, resto)
            
            res.status(200).json({
            msg:'PUT USUARIOS',
            id
        })
    }
    
    const usuariosDelete = async (req, res) =>{
            
        const {id} =req.params
        
        const usuario= await Usuario.findByIdAndUpdate(id, {estado: false})
        res.status(200).json({
            msg:'DELETE USUARIOS',
            usuario
        })

    }
    
    module.exports={
        usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosDelete
    }