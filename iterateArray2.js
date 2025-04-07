       
       
       // example one
        const iterateArray1=(items)=>{
            return items.map(i => i * 2);
        }
        console.log(iterateArray1([1, 2, 4, 5]))


        // // example 2
        const iterateArray2= (items)=>{
            let result =[];
            for(let i=0; i< items.length; i++){
                result.push(items[i] * 5)
            }
            return result
        };
        console.log(iterateArray2([1, 2, 4, 5]))


        const multiply2Array = (arr1, arr2) => {
            let result = []
            for (let i = 0; i < arr1.length; i++) {
                result.push(arr2[i] * arr1[i]);
            }
            return result;
        }
        console.log(multiply2Array([2, 3, 4], [5, 1, 6, 3, 4]));