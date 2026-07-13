console.time('Tempo de Execução');

const books = require('../Class1/books-list');
const lowerValue = require("../Class1/lower-value");

for(let i = 0; i < books.length; i++){
    for (let j = 0; j < books.length; j++){
        if(books[i].price < books[j].price){
            [books[i],books[j]] = [books[j],books[i]]
        }
    }
}

console.table(books)

console.timeEnd("Tempo de Execução")