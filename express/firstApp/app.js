// // differnce betwwen library and framework
// // A library is a collection of functions and tools that you can call upon to perform specific tasks,
// //  while a framework provides a structured way to build applications, often dictating the 
// // architecture and flow of the application.
// //library -> u can make changes
// //framework -> you have to follow the rules

// //React is a library or a framework?
// // React is considered a library because it primarily focuses on building user interfaces


// // What are routes?
// // Routes are the endpoints defined in a web application that determine how the application 
// // responds to client requests.
// // They map specific URLs to functions that handle the requests and generate responses.
const express = require('express');

const app = express();

// Route
app.get('/', (req, res) => {
    res.send("Hello from Express JS");
});

app.get('/about', (req, res) => {
    res.send("This is the about page");
});

app.use((req, res) => {
    res.status(404).send("Crazyyy Kiya Reee");
}); 

// Start server
app.listen(4000, () => {
    console.log("Server started at port 4000");
});
 // u can use between port no 3000 to 8000 -> as they are not reserved by system