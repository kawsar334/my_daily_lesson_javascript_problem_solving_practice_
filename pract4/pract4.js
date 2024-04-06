


const factorial = (n) => {
    if (n < 0) {
        return "invalid input: Number must be non-negative!";
    }
    if (n === 0 || n === 1) {
        return 1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;

    }
    return result
}

console.log(factorial(5))




class Factorial {
    constructor(n) {
        this.n = n;
    }

    fact() {
        if (this.n < 0) {
            return "invalid input :number must be non negative"
        }
        if (this.n === 0 || this.n === 1) {
            return 1
        }

        let result = 1;
        for (let i = 1; i <= this.n; i++) {
            result *= i
        }
        console.log(result)
    }
}


const newFact = new Factorial(5);
newFact.fact()