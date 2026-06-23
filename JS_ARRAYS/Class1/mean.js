const grades = [10, 6.5, 8, 7.5];

// const mean = (grades[0]+ grades[1]+ grades[2]+ grades[3]) / grades.length;

// Better version
const mean = grade => {
    let element = 0;
    for(let i =0; i < grade.length; i++){
        element += grade[i];
    }
    return element/ grade.length;
}

console.log(mean(grades))
