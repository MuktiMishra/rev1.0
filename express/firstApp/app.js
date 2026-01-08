const express = require('express');

const app = express();

// Route
app.get('/', (req, res) => {
    res.send("Hello from Express JS");
});

app.get('/about', (req, res) => {
    res.send("This is the about page");
});

app.get('/products/:id/:name', (req , res)=>{
    res.send("Product id is in the url "+ req.params.id + " and name is " + req.params.name);
}) // dynamic route

app.get('/user/:name/:age/:city',(req , res)=>{
    // same as 
    //let name = req.params.name;
    //let age = req.params.age;
    //let city = req.params.city;
    let {name , age , city}= req.params;
    res.send(`User name is ${name} , age is ${age} and city is ${city}`);
}) // dynamic route with destructuring

app.use((req, res) => {
    res.status(404).send("Crazyyy Kiya Reee");
});  // middleware to handle 404 errors // if no route matches this is executed
// written at the end after all routes



// Start server
app.listen(4000, () => {
    console.log("Server started at port 4000");
});
 // u can use between port no 3000 to 8000 -> as they are not reserved by system