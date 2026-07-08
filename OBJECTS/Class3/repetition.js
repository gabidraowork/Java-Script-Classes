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
    complement: "ap 934"
    }
];


client.addresses.push({
    road: "R. Joseph Ladder",
    number: 404,
    apartment: false
});

for (let key in client){
    let type = typeof client[key];
    if (type !== "object" && type !== "function")
        console.log(` ${key} : ${client[key]}`);
}