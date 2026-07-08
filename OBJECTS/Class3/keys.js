const client = {
    name: "Joao",
    age: 24,
    email: "joao@company.com",
    telephones:{"house" : "123104950", "job" : "129385230"}
};

client.addresses = [
    {
    road: "R. Joseph Climber",
    number: 1337,
    apartment: true,
    complement: "ap 934",
    },
];

const keysObject = Object.keys(client).sort()


if (!keysObject.includes("addresses")){
    console.error("Erro! É neccesário ter um endereço cadastrado.")
}