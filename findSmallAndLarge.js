
// find small and large item from array  with js class 
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



// converting in to inheritence ========================

class  ArrayProccesor{
    constructor(arr){
        this.arr= arr;
    }

    isValidArray(){
        if(this.arr.length===0){
            return "Array is Not Iterable";
        }
        for(let item of this.arr){
            if(typeof item !=="number"){
                return  "Inside array got non-number element, this array is not iterable"
            }
        }
        return true
    }
}


class SmallLargeFinder extends ArrayProccesor{
    constructor(arr){
        super(arr);
    }
    findSmallAndLarge(){
        const valid = this.isValidArray();

        if(valid !== true){
            return valid;
        }
        let small= this.arr[0];
        let large= this.arr[0]
        for(let i=0; i<this.arr.length; i++){
            if(this.arr[i]<small) small= this.arr[i];
            if(this.arr>large) small = this.arr[i]
        }

        return [small, large]
    }
}


const newSmallBig = new SmallLargeFinder([ 2, 10, 5, 3, 5, -1, -3, -5]);
console.log(newSmallBig.findSmallAndLarge());