const express = require("express")
const app = express()
const {CreateTodo,updateTodo}=require("./type")
const {todo}= require("./db")
const cors = require("cors")
app.use(express.json());
app.use(cors())
app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsePayload=CreateTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong input"
        })
        return;
    }
    // push it into db
   await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })

})
app.get("/todos",async function(req,res){
    const todos= await todo.find({})
    res.json({
        todos
    })



})
app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedpayload =updateTodo.safeParse(updatePayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"you sent the wrong input "
        })
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"mark as completed"
    })


})
app.listen(3000)

