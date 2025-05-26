const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const dburi = process.env.MONGOURI
        await mongoose.connect(dburi);
        console.log("db connected Succesfully")
    }catch(err){
        console.log("Error in DB connection:",err);
    }
}

module.exports = connectDB