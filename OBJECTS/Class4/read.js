const data = require("./client.json");

//console.log(data);

const stringClient = JSON.stringify(data);

console.log(stringClient);
console.log(typeof stringClient);


const objectClient = JSON.parse(stringClient);

console.log(objectClient)
console.log(typeof objectClient)