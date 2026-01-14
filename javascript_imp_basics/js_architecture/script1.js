// on click for a button

console.log('Script loaded');
document.getElementById('myButton').addEventListener('click', function() {
    
    alert('Button clicked!');
});

var a = {
    name : 'Mukti',
    age : 20,
    greet: function() {
        console.log('Hello, ' + this.name);
    }
}
let x=3;
function mfn(){
   let x=2;
   console.log(x);
   console.log(x.this); // undefined
}
mfn();
console.log(x);

const obj = {
    name:"mukti",
    age:20
}

Object.freeze(obj);  
obj.age = 21; // This will not change the age property
console.log(obj.age); // Outputs: 20