const {Router} = require('express');
const {productosPost} = require('../controllers/productos')
const {check} = require('express-validator')

const router= Router();


router.post('/',[
 
    check('nombre', 'El nombre del producto es obligatorio').not().isEmpty(),
        
], productosPost);




module.exports= router;
