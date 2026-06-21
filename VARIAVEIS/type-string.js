// const string
const text1 = "Hello, World!";
const text2 = 'Hello, World!';
const password = "superSecuryPassword456!";
const NumbersString = "34567";

//const citation = "Leo said 'Hi'!";
const citation = 'My name is ';
const myName = "Gabriel";

//concatenation (+)

console.log(citation + myName)

// UTF-16
const cifrao = '\u0024'
const aMaiusculo = '\u00411212'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// PS: string template OR literal template

// bolean opations
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

// input.toLoweCase();
const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


// .lenght
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres