//const CPFsList = [1111, 222222, 3333];

//const personalInfo = ['name', 'Jose', 'age', 32, 'CPF', '1111'];

const objectPerson = {
    name: 'Jose',
    idade: 32,
};

for(let[key,value] of Object.entries(objectPerson)){
    console.log(`${key} : ${value}`)
}