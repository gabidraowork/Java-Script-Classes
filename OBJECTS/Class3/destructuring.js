const pairNumbers = [2,3,6]
const oddNumbers = [1,3,5]

const numbers = [...pairNumbers, ...oddNumbers]



console.log(numbers)

const [num1, num2, ...other] = [1, 2, 3, 4, 5]
console.log(num1, num2, ...other)

const person = {
    name: "Ju",
    age: 25
}

const personWithPhone = {
    ...person,
    phone : "090129301"
}

console.log(person, personWithPhone)

const { age } = personWithPhone
console.log(age)

function printData({name , age}){
    console.log(name, age)
}

printData(person)