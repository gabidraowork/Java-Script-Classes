const listBooks = require("./array");
const joinLists = require("../Class1/index")

function mergeSort(array = []){
    if (array.length > 1){
        const midle =  Math.floor(array.length/2);
        const part1 = mergeSort(array.slice(0,midle));
        const part2 = mergeSort(array.slice(midle, array.length));
        array = joinLists(part1, part2);
    }
    
    return array;
}

console.log(mergeSort(listBooks))