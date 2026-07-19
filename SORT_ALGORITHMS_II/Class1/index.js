const { edFolha , edGalho } = require("./arrays");

function joinLists(list1 = [], list2 = []){
    let finalList = [];
    let i = 0;
    let j = 0;

    while (i < list1.length && j < list2.length){
        if (list1[i].preco < list2[j].preco){
            finalList.push(list1[i])
            i++;
        }
        else if (list1[i].preco > list2[j].preco){
            finalList.push(list2[j])
            j++;
        }
    }
    while (i < list1.length){
        finalList.push(list1[i]);
        i++;
    }
    while (j < list2.length){
        finalList.push(list2[j]);
        j++
    }

    return finalList;
}

console.log(joinLists(edGalho, edFolha))