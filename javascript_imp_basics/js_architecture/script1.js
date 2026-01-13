// on click for a button

console.log('Script loaded');
document.getElementById('myButton').addEventListener('click', function() {
    
    alert('Button clicked!');
});

var a = {
    name : 'Mukti',
    age : 25,
    greet: function() {
        console.log('Hello, ' + this.name);
    }
}