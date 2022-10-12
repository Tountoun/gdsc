
function isPrimeNumber(num) {
    if (num == 2 || num == 3){
        return true;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

function primeNumbers(start, end) {
    const array = [];
    for (let value = start; value <= end; value++){
        if(isPrimeNumber(value)){
            array.push(value);
        }
    }
    return array;
}

console.log(isPrimeNumber(4)); // false

primeNumbers(3, 30).forEach(
        (value) => {
            console.log(value)
        }
    );
// output: 3 5 7 11 13 17 19 23 29