


// find small and large item from array 
class SmallLarge{
    constructor(arr){
        this.arr = arr;
    }
    findSmallAndLarge(){
        let small = this.arr[0];
        let large =this.arr[0];
        if(this.arr.length === 0){
            return "array is Not iterable ";
        }
        
        for(let i=0; i<this.arr.length ;i++){
            if(typeof this.arr[i]==="number"){
                return "inside array got string , this array not iterable  "
            }
            if(small > this.arr[i]){
                small=this.arr[i]
            }
            if(large <this.arr[i]){
                large=this.arr[i]
            }
        }
        return [small, large]
    }
}

const smallandlarge = new SmallLarge(["st", 2, 10, 5, 3, 5, -1, -3,-5]);
console.log(smallandlarge.findSmallAndLarge())
