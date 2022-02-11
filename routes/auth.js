const {Router}=require ('express')
const {check} = require('express-validator')
const {login} = require('../controllers/auth.js')
const {validarCampos}=require('../helpers/validar-usuarios')

const router=Router();

router.post('/login',[

    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
], login)

module.exports=router;

