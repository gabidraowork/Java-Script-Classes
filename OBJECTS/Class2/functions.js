const client = {
    name: "Joao",
    age: 24,
    email: "joao@company.com",
    telephones:{"house" : "123104950", "job" : "129385230"},
    balance: 200,
    doPayment: function (value) {
        if (value > this.balance){
            console.log("Insuficient balance");
        }else {
            this.balance -= value;
            console.log(`payment was succesiful! new balance: ${this.balance}`);
        }
    }
};

client.doPayment(30)

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento