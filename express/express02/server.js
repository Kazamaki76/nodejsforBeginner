require("dotenv").config();
const fss = require("fs");
const fs = require("fs/promises");
const path = require("path");
const express = require("express");
const app = express();

const productFile = path.resolve("db", "products.json");
const deleteFile = path.resolve("db", "delete.json");

// console.log(productFile)

// const getProducts = () =>  fs.readFile(productFile,"utf-8").then( raw => {return JSON.parse(raw)})
const getProducts = () => fs.readFile(productFile, "utf-8").then(JSON.parse);
const getDeleted = () => fs.readFile(deleteFile, "utf-8").then(JSON.parse);
const saveFile = (file, data) =>
  fs.writeFile(file, JSON.stringify(data, null, 2));

if (fss.existsSync(deleteFile)) {
  saveFile(deleteFile, []);
}

getProducts().then((dat) => console.log(dat[0]));
//   section นี้ไว้แก้ 
app.get("/products", (req, res) => {
  const {
    _page = 1,
    _limit = 10,
    _maxPrice = 999999,
    _minPrice = 0,
  } = req.query;
  getProducts().then((all) => {
    const  productFilter = (_minPrice===0 &  _maxPrice===999999)
      ? all.filter((el) => el.price > +_minPrice && el.price < _maxPrice)
      : all
    let start = _page - 1 * _limit;
    let end = start + +_limit;
    let output = productFilter.slice(start, end);
    res.json({ allItems: productFilter.length, output });
  });
});

app.use((req,res,next)=> {
    // console.log("Run...")
    res.status(404).json({msg: "Path not found"})
    next()
})





//   section นี้ไว้แก้ 
app.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  getProducts().then((all) => {
    let del_idx = all.findIndex((el) => el.id === +id);
    if (del_idx === -1) return res.status(404).json({ msg: "Data not found" });
    let del_item = all.splice(del_idx, 1);
    saveFile(productFile, all);
    saveToDelete(del_item);
    res.json({ msg: `Delete id= ${id}` });
  });
});


let port = process.env.PORT || 8000;
app.listen(port, () => console.log("server on.. ", port));
