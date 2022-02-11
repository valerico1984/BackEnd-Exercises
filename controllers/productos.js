const Producto = require('../models/productos')


const productosPost = async (req, res) =>{
        
    const {nombre,estado, precio, descripcion}= req.body;
    const producto= new Producto({nombre,estado,precio,descripcion})
    await producto.save()

    res.status(200).json({
        msg:'PRODUCTO AGREGADO A LA BASE DE DATOS',
        producto
    })
}

module.exports={
    productosPost
}