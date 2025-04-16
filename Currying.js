

// example 1===============  Traditional function syntax
function curryng(a) {
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d
            }
        }
    }
    
}
console.log(curryng(2)(3)(4)(5))

// example 2===============Arrow function

const function1=(a)=>{
    return (b)=>{
        return (c)=>{
            return(d)=>{
                return a+b+c+d
            }
        }
    }
}

console.log(function1(5)(3)(10)(10))

// example 3=============== One-liner curry function
// short curryng example without return keyword
const func2= (a)=>b=>c=>d=>a+b+c+d
console.log(func2(2)(2)(2)(2))