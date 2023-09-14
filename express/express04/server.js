require("dotenv").config()
const express = require("express")
const app = express()
const userRoute = require("./routes/userRoutes")
const todoRoute = require("./routes/todoRoutes")
const notFoundMiddleware = require("./middleware/notFound")
const errorMiddleware = require("./middleware/errorMiddleware")


app.use("/user", userRoute) 
app.use("/todo", todoRoute)




app.use(notFoundMiddleware)
// app.use((req,res ) => {
//     res.status(404).json({ msg: " Path not found"})
// })

app.use((err,req,res,next) => {
    res.status(500).json({msg: err.message})
})

const port =process.env.PORT || 8000
app.listen(port, ( )=> console.log("Server on", port))