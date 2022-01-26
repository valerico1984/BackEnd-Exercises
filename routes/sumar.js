const {Router} = require('express');
const {sumarPrimeraRuta, sumarSegundaRuta, sumarPost, sumarPut, sumarDelete} = require('../controllers/sumarcontrollers')

const router= Router();


router.get('/:num1/:num2', sumarPrimeraRuta);
router.get('/', sumarSegundaRuta);


router.post('/',sumarPost);

router.put('/:id', sumarPut);

router.delete('/:id', sumarDelete);



module.exports= router;
