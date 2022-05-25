const express=require("express");
const router=express.Router();
const Payment=require("../models/payment.model");



router.get("",async(req,res)=>{
    try{
       const payment=await Payment.find().lean().exec()
        return res.status(200).send(payment)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.post("",async(req,res)=>{
    try{
        const payment=await Payment.create(req.body);
        return res.status(201).send(payment); 

    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});





module.exports=router;