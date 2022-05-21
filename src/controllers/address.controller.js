const express=require("express");
const router=express.Router();
const Address=require("../models/address.model");



router.get("",async(req,res)=>{
    try{
       const address= await Address.find().lean().exec()
        return res.status(200).send(address)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.post("",async(req,res)=>{
    try{
        const address=await Address.create(req.body);
        return res.status(201).send(address); 

    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});





module.exports=router;