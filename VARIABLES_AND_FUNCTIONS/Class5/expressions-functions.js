// declaração de função
console.clear();

function myFunction(param){
    // code;
}

//myFunction("param");

// function expression

//console.log(sum(1,1));

// main difference: HOISTING
// 

console.log(show());

function show(){
    return "olá";
}


const sum = function(num1,num2) {return num1 + num2};
console.log(sum(1,1));
