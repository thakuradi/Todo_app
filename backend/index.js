const express = require("express")
const app = express
const {CreateTodo,updateTodo}=require("./type")

app.request(express.json());

app.post("/todo",function(req,res){
    const createPayload=req.body;
    const parsePayload=CreateTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong input"
        })
    }

})
app.get("/todos",function(req,res){

})
app.put("/completed",function(req,res){
    const updatePayload = req.body;
    const parsedpayload =updateTodo.safeParse(updatePayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"you sent the wrong input "
        })
    }


})

