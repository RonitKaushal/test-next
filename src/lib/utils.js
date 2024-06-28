import mongoose from 'mongoose'


const DB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB connection success')
    } catch (error) {
        console.log("MONGO URI Error: ", error)      
    }
}

export default DB