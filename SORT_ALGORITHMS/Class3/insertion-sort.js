const books = require("../Class1/books-list.js");


function insectionSort(lista = [], param = "title"){

    for (let i = 0; i < lista.length; i++){
        let analise = i;
        while (analise > 0 && lista[analise] && lista[analise-1] && lista[analise-1][param] > lista[analise][param]){

            [lista[analise-1][param] , lista[analise][param]] = [lista[analise][param] , lista[analise-1][param]]
            
            analise--  
        }
    }

}


console.time("InsertionSort time")
insectionSort(books, "price")
console.timeEnd("InsertionSort time")
