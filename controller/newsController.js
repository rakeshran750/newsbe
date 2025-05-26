const News = require('../models/newsModel');


const getNewsdata = async(req,res)=>{
    try{
        let data =  await News.find();
        res.status(200).json(data)
    }catch(err){
        console.log({message:"Error in mesagegenrateoin", error:err.message})
        res.status(200).json({message:"erro in news card generating"})
    }
}


module.exports = { getNewsdata}