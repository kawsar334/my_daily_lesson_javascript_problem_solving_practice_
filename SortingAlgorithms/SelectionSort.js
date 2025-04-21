



class ArrayProcess {
  constructor(arr) {
    this.arr = arr;
  }
}

class SelectionSort extends ArrayProcess{
  constructor(arr){
    super(arr);
  }

  SORT(){
    let n = this.arr;
    for(let i=0; i<n.length; i++){
      let low = i
      for(let j=i; j<n.length; j++){
        console.log(n[i], "and", n[j], "array:",this.arr);
        if(this.arr[low]>this.arr[j]){
          low= j;
        }
        let temp = this.arr[i];
        this.arr[i]= this.arr[low];
        this.arr[low] = temp
       
      }

    }
  return this.arr
    
  }
}


const newSelectionSort= new SelectionSort([4,2,1,6,10]);
console.log(newSelectionSort.SORT())