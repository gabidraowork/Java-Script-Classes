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


client.addresses.push({
    road: "R. Joseph Ladder",
    number: 404,
    apartment: false
});

const listApartamentsOnly = client.addresses.filter((address) => address.apartment === true);

console.log(listApartamentsOnly)