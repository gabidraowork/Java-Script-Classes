console.time('Tempo de Execução');

const books = require('../Class1/books-list');
const lowerValue = require("../Class1/lower-value");

let mapBooks = [...books]
let newBooks = []

while (mapBooks.length > 0){
    let lower = lowerValue(mapBooks, "price");
    newBooks.push(mapBooks[lower])
    mapBooks.splice(lower, 1);
}
   
console.timeEnd("Tempo de Execução")


console.time('Tempo de Execução2');

let mapBooks2 = [...books]

for(let i = 0; i < mapBooks2.length; i++){
    for (let j = 0; j < mapBooks2.length; j++){
        if(mapBooks2[i].price < mapBooks2[j].price){
            [mapBooks2[i],mapBooks2[j]] = [mapBooks2[j],mapBooks2[i]]
        }
    }
}

console.timeEnd("Tempo de Execução2")

console.time('Tempo Nativo JS');
let mapBooks3 = [...books];
mapBooks3.sort((a, b) => a.price - b.price);
console.timeEnd('Tempo Nativo JS');


let mapBooks4 = [...books]
console.time("Selection Sort Alura")

for (let atual = 0; atual < books.length-1; atual++){
   let menor = lowerValue(mapBooks4, "price", atual);

   [mapBooks4[atual] , mapBooks4[menor]] = [mapBooks4[menor], mapBooks4[atual]]
}
//console.table(mapBooks4)
console.timeEnd("Selection Sort Alura")


