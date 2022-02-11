const {Schema, model}= require('mongoose')

const UsuarioSchema=Schema ({

    nombre:{
        type: String,
        required: [true,"El usuario es requerido"]
    },

    correo:{
        type: String,
        required: [true,"El correo electrónico es requerido"],
        unique:true,
    },
    
    password:{
        type: String,
        required: [true,"El password es requerido"]
    },
    
    img:{
        type: String,
     },
    
    rol:{
        type: String,
        require: true,
        default: 'USER_ROLE',
        emun:['USER_ROLE','USER_ADMIN'],
    },

    estado:{
        type: Boolean,
        default: true,
    },

    google:{
        type: Boolean,
        default: false,
    },
})

module.exports= model('Usuario', UsuarioSchema)
