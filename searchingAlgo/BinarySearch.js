



// binary search using js function 
const binarySearch=(arr, target)=>{
    let low= 0;
    let high = arr.length -1;
    while(low<=high){
        let mid = Math.floor((low + high)/2);
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            low = mid -1;
        }else{
            high = mid+1
        }
    }
    return -1
};

const numbers = [10, 20, 30, 40, 50, 60, 70];
console.log(binarySearch(numbers, 50));



// another example of binary search using js class ============================
class BinarySearch{
    constructor(arr){
        this.arr= arr.sort((a,b)=>a - b);
        this.low = 0;
        this.high = this.arr.length - 1;
    }
    resetPointers() {
        this.low = 0;
        this.high = this.arr.length - 1;
    }
    
    Search(target){
        this.resetPointers();
        while(this.low<this.high){
            let mid = Math.floor((this.low+this.high)/2);
            if(mid === target){
                return mid;
            }else if(this.arr[mid]<target){
                return this.low = mid+1;

            }else{
                this.high = mid -1;
            }
        }
        return -1;
        
    }
}

const newBinary = new BinarySearch(numbers);
console.log("class binary result ", newBinary.Search(40))