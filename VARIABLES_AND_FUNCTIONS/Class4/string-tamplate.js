const name = "ju";
const age = 2026 - 1981;
const homeCity = "São Paulo";

//const apresentation = "my name is " + name + ", I am " + age + " years old, and I borned in " + homeCity;
// to complicated

const apresentation = `My name is ${name}, I'am ${age} years old, and I borned in ${homeCity}`;
console.log(apresentation);

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)