

let arr = [2,4,5,3,1];
// first example
const calculate = (arr)=>{
    const total = arr.reduce((accum, curElem)=>{
        return accum + curElem
    },0)
    return total;
}
console.log(calculate(arr));


// second example
const getAvarageOfArray=(arr)=>{
    if(arr.length ===0)return 0;

    let sum = 0 ;
    for(let i = 0;i<arr.length; i++){
        sum +=arr[i];
    }
    return sum ;
}
console.log(getAvarageOfArray(arr));
// 3rd example
// using class 
class GetAvarageOfArray{
    constructor(arr){
        this.arr= arr;
    }
    getAv(){
        let sum =0;
        for(let i =0; i<this.arr.length; i++){
            sum+= this.arr[i];
        }
        return sum
    }
}
const newAvr =new GetAvarageOfArray(arr);
console.log(newAvr.getAv())


