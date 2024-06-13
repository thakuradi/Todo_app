const mongoose = require("mongoose")
// mongodb+srv://thakur:7X%403uw8r@cluster0.ai2rpio.mongodb.net/
mongoose.connect('mongodb+srv://thakur:7X%403uw8r@cluster0.ai2rpio.mongodb.net')
const todoSchema = mongoose.Schema({
    title:"string",
    description:"string",
    completed:"Boolean"
})
const todo = mongoose.model('todos',todoSchema)
module.exports={
    todo
}