const mongoose= require ('mongoose')
require ('dotenv').config();


const dbConnection= async ()=>{
    try{

        await mongoose.connect(process.env.MONGODB_CNN)

        console.log('Base de datos conectada')
    }

    catch (error) {
        
        console.log(error)
        
        throw new Error('Error a la hora de iniciar la base de datos')
    }
}


module.exports={
    dbConnection
}