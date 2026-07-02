const means = [10, 6.5, 8, 7.5];

let sum = 0;
for (let mean of means){
    sum += mean
}

mean = sum/means.length

console.log(mean)