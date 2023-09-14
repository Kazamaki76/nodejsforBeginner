require("dotenv").config()
const axios = require("axios")
const express = require("express")
const app = express() 

const todos = [ 
    {id:11, title: "Learn HTML"},
    {id:22, title: "Learn CSS"},
    {id:33, title: "Learn JS"},
]

app.use(express.json())


app.get("/todos" , (req,res) => {
    res.json(todos)
})

app.post("/todos",(req,res) => {
    todos.push(req.body)
    res.json({msg : "post todo"})
})


// ให้ทำ update ข้อมูลตาม params และ body ที่ส่งมา 
app.put("/todos/:id", (req,res) => {
    // todos.push(req.body)
    console.log(req.params)
    console.log(req.body)
    let idx = todos.findIndex(el => el.id === +req.params.id)
    console.log(idx)
    todos[idx].title = req.body.title 
    res.json({ msg: " Put Todo"})
})

app.get("/cat", async (req,res,next) => {
    try {
        const res = await axios.get("https://cataas.com/api/cats")
        let amount = res.data.length
        res.json({amount, allCat: res.data})
    }catch(error) { 
        next(error)
    }
})


// app.get("/cat", (req,res,next) => {
//     axios.get("https://cataas.com/api/cats").then(rs => {
//         console.log(rs.data[0])
//         let amount = rs.data.length
//         res.json({amount, allCat: rs.data})
//         // res.json({msg : "CAT.."})
//     }).catch(err => {
//         console.log(err.message)
//         next(err)
//     })
// })


app.use("/todos", (req,res) => {
    res.json({ msg : "Path not found "})
})

app.use(( err,req,res,next  ) => {
    console.log(err)
    res.status(500).json({msg : "Have problem in backend"})
})

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log("Server on port", port )
})