import mongoose from "mongoose"
export const connectedDb=async(req,res)=>{

    try{
       await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoose connected successfully")
    }catch(error){
        console.log(error.message)
    }
}