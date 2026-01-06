const math = require('./math.js');

console.log(math);

let x = math.f1(10, 12);
let y = math.f2(3 ,4);

console.log(x);
console.log(y);

// reading and writing in a file using js

const fs = require('fs');
const path = require('path');

const data = "This is a string data";

console.log(__dirname); 
//will give u path of the file with whole directory from c drive to ur file


const location = path.join(__dirname, 'file1.txt'); 
// joins any path , useful for crating new file from code

console.log(location);

// fs.writeFile(location , data , (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File created successfully");
//     }
// }); // write at what location and write what data

//callback : passing a function as an argument to another function

const location1 = path.join(__dirname , "temp.txt");
fs.readFile(location1 , (err , data)=>{
    if(err){
        console.log("error faced");
    }
    else{
        console.log("file read successfully");
        console.log(data); // return <Buffer >
        console.log(data.toString()); // returns actual data
    }
})

fs.readFile(location1 ,{encoding: 'utf-8'}, (err , data)=>{
    if(err){
        console.log("error faced");
    }
    else{
        console.log("file read successfully");
        console.log(data); // return actual data because of encoding
        
    }
})


