const books = require('./books-list.js')

function lowerValue(list, param, init = 0) {
    let chepear = init;
    for(let i = init; i < list.length; i++){
        if (list[i][param] < list[chepear][param]){
            chepear = i;
        }
    }
    return chepear
}

module.exports = lowerValue;