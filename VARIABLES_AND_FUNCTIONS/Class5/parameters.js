// function parameters


function sum(num1,num2){
    return num1 + num2;
}
// console.log(sum(2,5));
// console.log(sum(1231,123123));

// pareters vs args

// parameters order

// function nameAge(name, age){
//     return `my name is ${name} e I'm ${age} years old.`;
// }

//console.log(nameAge(22, "bolsonaro"));

function multiply(num1 = 1 ,num2 = 1){
    return num1 * num2;
}

console.log(multiply(sum(60,7)));