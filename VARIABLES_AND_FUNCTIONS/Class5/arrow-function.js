function show(name){
    return `My name is ${name}`;
}

// Arrow function
const showArrow = name => `My name is ${name}`;
const sum = (num1, num2) => num1 + num2;

//Arrow function com  + de 1 linhas de instrução

const sumSmallNumbers = (num1,num2) => {
    if (num1 > 10 || num2 > 10){
        return "The numbers are too small!!(1 to 9 only): ";
    } else {
        return num1 + num2;
    }
}

// greater