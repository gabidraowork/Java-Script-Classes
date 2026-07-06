const client = {
    name: "Andre",
    age: 32,
    cpf: "111123123",
    email: "andre@dominio.com"
}

console.log(`The name of the client is ${client.name}, this person is ${client.age} years old`);

console.log(`The first 3 digits of his CPF are ${client.cpf.substring(0,3)}`)