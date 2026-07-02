function checkPrime(number){
    let check = 0;
    for (let i=1; i <= number; i++){
        if (number % i === 0){
            check++;
        }
    }
    return (check === 2);
}

let primes = [];

for(let i=0; i <= 100000; i++){
    if(checkPrime(i)){
        primes.push(i);    
    }
}

for(prime of primes){
    process.stdout.write(prime + "  ")
}