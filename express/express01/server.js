require("dotenv").config()
const express = require("express")
const app = express()

const todos = [
    {id: 11, title: "Learn HTML"},
    {id: 22, title: "Learn CSS"},
    {id: 33, title: "Learn JS"},
]

app.get("/", (req,res) => {
    res.setEncoding({msg : "welcome to Express server "})
}) 

app.get("/todos", (req,res) =>{
    res.json(todos)
})

app.get("/add:x/:y",(req,res) =>{
    console.log(req.params)
    res.json(req.params)
})


// แปลง code นี้ให้หาจาก id ถ้าไม่มีให้ใส่ msg : "have no data", status เป็น 404 
app.get("/todos/:id", (req,res) => {
    let {id} = req.params
    console.log(id)
    let output = todos.filter(el => el.id)
    if (output.length <=0) 
        res.json({msg: `Have no data with id=${id} `,})

    res.json( output)
})

// app.use((req,res) => {
//     send(404 ,{msg:"resource not found"})
// })


let port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("server on port" , port)
})
