const clients = require("./clients.json");


const find = (list, key, value) => 
    list.find((item) => item[key].includes(value));


const cecelia = find(clients, "nome", "Cecelia");
const encontrado2 = find(clients, "telefone", "7593785074")

console.log(cecelia);
console.log(encontrado2);