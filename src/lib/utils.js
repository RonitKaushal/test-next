import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import mongoose from 'mongoose'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const DB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB connection success')
    } catch (error) {
        console.log("MONGO URI Error: ", error)      
    }
}
export default DB
