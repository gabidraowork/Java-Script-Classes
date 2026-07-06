const students = ["Ana", "Marcos","Maria","Mauro"];
const means = [7, 4.5, 8, 7];

const reprovados = students.filter((_, i ) => {
    return means[i] < 6;
})

console.log(reprovados);