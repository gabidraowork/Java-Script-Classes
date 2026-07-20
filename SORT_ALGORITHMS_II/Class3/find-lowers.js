const booksList = require("./array")

function findLowers(pivot, array){
    let lowers = 0;
    for(let i = 0; i <array.length; i++){
        let currentProduct = array[i]
        if(currentProduct.preco < pivot.preco){
            lowers++
        }
    }
    swap(array, array.indexOf(pivot), lowers)
    return array
}

function swap(array, from, to){
    [ array[from], array[to] ] = [ array[to], array[from] ]
}

function divideOnpivot(array){
    let pivot = array[Math.floor(array.length / 2)];
    findLowers(pivot, array)
    let lowerValues = 0

    for (let a = 0; a < array.length; a++){
        let current = array[a];
        if (current.preco <= pivot.preco && current != pivot){
            swap(array, a, lowerValues)
            lowerValues++
        }
    }
    return array;
}

console.log(divideOnpivot(booksList))
// console.log(findLowers(booksList[2], booksList))

module.exports = swap
