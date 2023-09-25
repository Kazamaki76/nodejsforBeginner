const express = require("express");

// application object 
const app = express() ;

// parse request body string => object append to request object 
app.use(express.json());




// 1st middleware 
app.use((req,res,next) => {
    console.log(req.body);
    console.log(`Request ${req.method}: ${req.path} ${new date()} `);
    // next()
    // res.json("Hello Middleware1");
    next();
});

// 2nd middleware
// app.use((req,res,next) => {
//     console.log("Middleware#2");

// });
app.get('/todo', (req,res,next) => {
    res.json('Todo Data')
})

app.post('/todo',(req,res,next)=>{
    req.json('create todo')
})


app.use((err, req,res,next)=>{
    res.json('Error Middleware')
} )

app.listen(8000, () => console.log("server running on port 8000"))



// // middleware
// const mid1 = (req,res,next) => {}
// app.use(mid1)

// const mid2 = (req,res,next) => {}
// app.use(mid2)

// const mid3 = (req,res,next) => {}
// app.get('/example',mid3)

// const mid4 = (req,res,next) => {}
// app.post('/example', mid4)

// // Error middleware
// const error= (err,req,res,next) => {}
// app.use(error)


// receive parameter by port number
// app.listen(8000, () => console.log("server running on port 8000"))