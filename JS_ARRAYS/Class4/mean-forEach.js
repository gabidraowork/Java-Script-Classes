const means = [10, 6.5, 8, 7.5];

let sum = 0;

means.forEach(function (mean, index) {
    sum += mean;
    //console.log(index)
});
mean = sum/means.length

console.log(mean)