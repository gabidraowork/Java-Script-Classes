//**********//
//var
//**********//
//    var x = 5;
//    var y = 7;
//
//    area = x * y;
//    console.log(area)
//    var area;

//**********//
//let
//**********//
// let shape = "rectangle";
// let x = 5;
// let y = 7;
// let area;

// if(shape === "rectangle"){
//     area = x * y;
// } else{
//     area = (x*y) /2;
// }


// console.log(area)
// worng here : let area;

//**********//
//Most used way {no var}//
//**********//

const shape = "triangle";
const y = 5;
const x = 7;
let area;

if(shape === "rectangle") {
    area = x*y; 
} else {
    area = (x * y) / 2;
}
console.log(area)
