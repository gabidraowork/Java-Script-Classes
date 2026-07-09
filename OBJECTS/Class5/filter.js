const clients = require("./clients.json");

const filterApartamento = (list) =>
    list.filter((client) => 
        client.endereco.apartamento && 
        !client.endereco.hasOwnProperty("complemento"))

console.log(filterApartamento(clients));
