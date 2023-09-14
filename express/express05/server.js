const path = require("path")
require("dotenv").config()
const express  = require("express")
const app = express()
const notFound = require("./middleWares/notFound")
const errorMw = require("./middleWares/errorMiddleWare")

app.use("/static", express.static("public"))

app.use(notFound)
app.use(errorMw)

const port = process.env.PORT || 8000
app.listen(port, ()=>console.log("server on",port))
