const {Schema, model}= require('mongoose')

const ProductoSchema=Schema ({

    nombre:{
        type: String,
        required: [true,"El nombre del producto es requerido"],
        unique: true
    },

    estado:{
        type: Boolean,
        default: false
    },
    
    precio:{
        type: Number,
        default: 100
    },
    
    descripcion:{
        type: String,
     }
})

module.exports= model('Producto', ProductoSchema)
