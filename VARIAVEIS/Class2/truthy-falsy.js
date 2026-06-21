// boolean
console.log();
const userLogged = true;
const rentPayed = false;

// values type truthy OR falsy

// 0 => false
// 1 => true
// == is used just to compare de value, not the value and the type

const value1 =  (0 == true);
console.log("0 => " + value1);

const value2 = (1 == true);
console.log("1 => " + value2);

console.log();

// "" => false
const value3 = "" == true;
console.log('"" => ' + value3);


// undefined

// null => empty or nothing

let myVar;
let varNull = null;

console.log();
console.log("let myVar; => " + myVar);
console.log("let varNull = null => " + varNull);
console.log();

let number = 3;
let string = "Alura";

console.log("typeof number (let number = 3;)  => " + typeof number);
console.log("typeof string  (let string = 'Alura';) => " + typeof string);
console.log();
console.log("typeof myVar (let myVar;)  => " + typeof myVar);
console.log("typeof varNull  (let varNull = null;) => " + typeof varNull);