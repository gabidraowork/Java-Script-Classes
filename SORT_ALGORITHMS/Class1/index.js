const books = require('./books.list.js')

let chepeaer = 0;
for(let i = 0; i < books.length; i++){
    if (books[i].price < books[chepeaer].price){
        chepeaer = i;
    }
}

console.log(`The chepeast book is ${books[chepeaer].title}`)

