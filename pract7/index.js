

// write a function that takes a number as input and returns sum of its digits.
const input = 123
// using regular function ... 
const sumOfNumbers = (num) => {
    let sum=0;
    let numStr = num.toString();
    
    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }
    console.log(sum)
}
sumOfNumbers(input);



// using oops // 
class SumOfNumbers {
    constructor(num){
        this.num = num
    }

    calculate(){
        let some = 0;
        let numStr = this.num.toString();
        for(let i=0; i<numStr.length;i++){
            some += parseInt(numStr[i])
        }

        return some;
    }
}

const calculator = new SumOfNumbers(input)

console.log(calculator.calculate())
