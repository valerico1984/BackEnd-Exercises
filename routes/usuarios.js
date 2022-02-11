const {Router} = require('express');
const {usuariosGet, usuariosPut, usuariosPost, usuariosDelete} = require('../controllers/usuarios')
const {check} = require('express-validator')
const {validarCampos}= require('/Users/Valeria Rico/Desarrollo Web/Usuarios/helpers/validar-usuarios')
const {emailExiste}=require('../middlewares/emailExiste')

const {login}= require('../controllers/auth')


const router= Router();


router.get('/',usuariosGet);

router.post('/',[
 
    check('nombre', 'El campo nombre es obligatorio').not().isEmpty(),
    check('password', 'El campo password debe tener un mínimo de 6 caracteres').isLength(min=6),
    check('correo', 'El campo correo es obligatorio').not().isEmpty(),
    check('correo', 'Debe ingresar un correo electrónico válido').isEmail(),
    check('correo').custom(emailExiste),

    validarCampos
], usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/:id', usuariosDelete);



module.exports= router;
