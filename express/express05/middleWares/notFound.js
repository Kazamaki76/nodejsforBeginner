function notFound(req,res) {
    res.status(404).json({msg: "Path not found"})
}

module.exports = notFound