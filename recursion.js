

// example 1 

const recursion1= (n)=>{
     if (n === 0 || n === 1) {
    return 1;
  }

  return n*recursion1(n -1)
}

console.log(recursion1(2))


// example 2

const sumOfArray= (arr)=>{
    if(arr.length===0) {
        return 0;
    };
    return arr[0]  +sumOfArray(arr.slice(1));
}

console.log(sumOfArray([2,3,4,10,1]))