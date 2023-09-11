function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function returnPrimeNumbers(inputNum) {
    let arrWithResults = []
    for (let i = 1; i <= inputNum; i++) {
        if (inputNum % i === 0 && isPrime(i)) {
            arrWithResults.push(i)
        }
    }
    console.log("All prime divisors for " + inputNum + " are " + arrWithResults.join())
}
returnPrimeNumbers(1001)