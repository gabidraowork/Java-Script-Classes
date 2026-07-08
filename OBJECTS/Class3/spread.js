const client = {
    name: "Joao",
    age: 24,
    email: "joao@company.com",
    telephones: ["123104950", "129385230"]
};

client.addresses = [
    {
    road: "R. Joseph Climber",
    number: 1337,
    apartment: true,
    complement: "ap 934",
    },
];

function callClient(job, house){
    console.log(`Calling ${job}`);
    console.log(`Calling ${house}`);
};

callClient(...client.telephones);

const encomendation = {
    recipient : client.name,
    ...client.addresses[0],
}

console.log(encomendation)