




// 2. update or add property
// given: -[
//     { id: 1, price: 55.55, ratting: 6 },
//     // many more
// ]
//     in: -{ id: 1, ratting: 7, pending: true }
// out: -[
//     { id: 1, price: 55.55, ratting: 7, pending: true }
//     //other remain same
// ]



const array = [
    { id: 1, price: 55.55, ratting: 6 },
    { id: 2, price: 44.44, ratting: 5 },
    { id: 3, price: 55.55, ratting: 6 },
    { id: 4, price: 75.99, ratting: 7 },
    { id: 5, price: 20.00, ratting: 4 },
]
const modifiyObj= (obj)=>{

    let findeLement = array.find((item)=>item.id==1);

    return findeLement= obj

}

// out: -[
//     { id: 1, price: 55.55, ratting: 7, pending: true }
//     //other remain same
// ]

console.log(modifiyObj({ id: 1, ratting: 7, pending: true }))
