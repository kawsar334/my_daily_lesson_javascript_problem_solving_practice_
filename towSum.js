




const TwoSum=(arr, target)=>{
    for(let i=0; i<arr.length; i++){
        for(let j=1 ; j<arr.length; j++){
            if(arr[i] + arr[j]=== target){
             return  [i , j]
            }   
        }
    }
}

console.log(TwoSum([4,2,5,3,1],7))





// same problem  using class with inheritence 
class ArrayTarget{
    constructor(arr, target){
        this.arr= arr;
        this.target= target;
    }
}

class TwoSumFinder extends ArrayTarget{
    constructor(arr, target){
        super(arr, target)
    }
    findTwoSum(){
        for(let i=0; i<this.arr.length; i++){
            for(let j=0; i<this.arr.length; j++){
                if(i !== j &&  this.arr[i] +this.arr[j]=== this.target){
                    return [i, j];
                }
            }
        }
        return null;
    }
}

const newArraySum = new TwoSumFinder([4, 2, 5, 3, 1], 7);
console.log("result from class ", newArraySum.findTwoSum())