const grades = [10, 9.5, 8, 7, 6];
const gradesUpdated = grades.map( (grade) => {
    return Math.min(grade + 1, 10);
    // return grade + 1 >= 10? 10 : grade + 1;
});

console.table(gradesUpdated)