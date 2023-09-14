const express = require("express")
const router = express.Router()

router.get("/",(req,res) => {
    console.log(qqq)
    res.json({ msg: "In userRoute"})
})

router.post("/",(req,res) => {
    res.json({msg: "Post in userRoute"})
})

module.exports = router