

console.log("insertion sort -------------------")

const insertionSort = (arr)=>{
    for(let i=0; i<arr.length; i++){    
        for(let j=i; j>0; j--){
            console.log(arr[i], "j: ", arr[j]);
            if(arr[j] <arr[j-1]){
                let temp = arr[j];
                arr[j]= arr[j-1];
                arr[j-1] = temp 
            }
        }
    }
    return arr;

}

console.log(insertionSort([5,2,10,7,11]))