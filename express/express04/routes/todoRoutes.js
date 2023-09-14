const express = require("express")
const router = express.Router()

router.get("/",(req,res) => {
    res.json({ msg: "In todoRoute"})
})

router.post("/search",(req,res) => {
    res.json({msg: "Post in todoRoute"})
})

module.exports = router