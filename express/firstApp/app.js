const express = require('express');

const app = express();

// Route
app.get('/', (req, res) => {
    console.log(req.query); // to get query parameters
    res.send("Hello from Express JS");
});

let movies = [
    {name: "Inception", director: "Christopher Nolan"},
    {name: "Interstellar", director: "Mukti Mishra"},
    {name: "The Dark Knight", director: "Christopher Nolan"},
    {name:"kdf", director:"sdf"}
];
app.get('/movies', (req, res) => {
    let name = req.query.name;

    if (name) {
        let movie = movies.find(
            m => m.name.toLowerCase() === name.toLowerCase()
        );

        if (movie) {
            res.send("Director of " + name + " is " + movie.director);
        } else {
            res.send("Movie not found");
        }
    } else {
        res.send("Please provide movie name");
    }
});

// csr -> client side rendering , in this only data is sent from server to client , use api to send 
// data to client 
// ssr -> server side rendering , in this whole html page is sent from server to client

app.get('/temp', (req, res) => {
    res.send(`<h1>This is the temp page</h1>`);

});

app.get('/file',(req, res)=>{
    res.sendFile(__dirname + '/index.html'); // to send html file from server to client
})


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

// to run this file -> node app.js