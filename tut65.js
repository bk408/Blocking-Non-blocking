// Synchronus or blocking
// -line by line execution guaranteed


// Asynchronus or non-blocking
// -line by line execution not guaranteed
// - Callback will fire


const fs = require("fs");
let text = fs.readFile("dele.text", "utf-8", (err, data)=>{
console.log(err, data);
});
console.log("This is a message");


// node.js works on non-blocking IO Model