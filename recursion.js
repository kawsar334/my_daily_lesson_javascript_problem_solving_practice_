

// example 1 

const recursion1= (n)=>{
     if (n === 0 || n === 1) {
    return 1;
  }

  return n*recursion1(n -1)
}

console.log(recursion1(2))


// example 2--reverse string 
const recursion2 = (str) => {
   if(str ==="") return "";
   return recursion2(str.slice(1))+str[0]
}


console.log(recursion2("hello"))

// example 3 
const factorial = (n)=>{
    if(n===0 || n===1) {
        return 1;
    }

    return n*factorial(n-1);
}
console.log("factorial:", factorial(3))


// example 4 ... sum of array ----
const sumOfArray = (arr) => {
    if (arr.length === 0) {
        return 0;
    };
    return arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray([2, 3, 4, 10, 1]))
