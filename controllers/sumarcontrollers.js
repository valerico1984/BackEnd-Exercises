const sumarPrimeraRuta =(req, res) =>{

    const {num1, num2} = req.params;
    const resultado= Number(num1) + Number(num2);
    res.status(200).json({
        numero1: Number(num1),
        numero2: Number(num2),
        resultado_suma:  resultado,
        
    })
    
    }

const sumarSegundaRuta=(req, res) => {

        const { num1,num2 } = req.query;
          
        
       const resultado = Number(num1) + Number(num2);
    
        res.status(200).json({
            numero1: Number(num1),
            numero2: Number(num2),
            resultado_suma:  resultado,
        })
    }

const sumarPost =(req, res) =>{
        
        const body= req.body

        res.status(200).json({
            msg:'OK POST',
            body
        })
    }
    
    const sumarPut =(req, res) =>{
            const {id}= req.params
            res.status(200).json({
            msg:'OK PUT',
            id
        })
    }
    
    const sumarDelete =(req, res) =>{
            const {id} =req.params
            res.status(200).json({
            msg:'OK DELETE',
            id
        })

    }
    
    module.exports={
        sumarPrimeraRuta,
        sumarSegundaRuta,
        sumarPost,
        sumarPut,
        sumarDelete
    }