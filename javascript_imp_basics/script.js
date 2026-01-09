//namste JS; from yt
console.log(x);
var x = 10;
console.log(x);

// console.log(y); -> This would cause a ReferenceError
let y = 20;
console.log(y);

{
    let z = 30;
    console.log(z);
    var w = 40;
    console.log(w);
}

console.log(w); // Accessible here because 'var' is function-scoped

// console.log(z); -> This would cause a ReferenceError

for(var i=0; i<10; i++){
    setTimeout(()=>{
        console.log(i);
    }, 4000);

}

// if we use var instead of let in the for loop, the output will be 10 printed 10 times after 4 seconds
// This is because 'var' is function-scoped, so by the time the callbacks execute, the loop has completed 
// and 'i' has the value 10. All callbacks reference the same 'i'.

// It is not 4 × 10 = 40 seconds because setTimeout does not pause or wait; it only schedules a task. 
// The for loop executes instantly and registers all 10 timers almost at the same time, each with 
// the same 4-second delay. All these timers then wait in parallel, and once 4 seconds are over, 
// their callbacks become ready together and are executed by the event loop. Since the delays run
// concurrently and not one after another, the total time to get the full output is about 4 seconds, 
// not 40 seconds.

console.log("hello world");