const clients = require("./clients.json");

const ordenar = (list, property) => 
    result = list.sort((a,b) => 
    a[property].localeCompare(b[property]))
    
const nomeAlfabetica = ordenar(clients, "nome");

console.log(nomeAlfabetica);