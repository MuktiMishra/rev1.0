function add(a ,b){
    return a+b;
}

function multiply(a , b){
    return a*b;
}

module.exports ={'f1': add, 'f2' :multiply}; // key value pair hota hai 
// module.exports = {add , multiply};