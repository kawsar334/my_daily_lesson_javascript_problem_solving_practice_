


// example 1 ======================
const func1=()=>{
    console.log(" function1-------------first"); 
    setTimeout(() => {
        console.log(" function1-------------second")
        setTimeout(() => {
            console.log(" function1-------------third")
            setTimeout(() => {
                console.log(" function1-------------4th")
            }, 1000);
        }, 1000);
    }, 1000);
}
setTimeout(() => {
    func1()
}, 4000);


//exampl2 using promise ==================
const func2=(msg, time)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(msg)
        }, time);
        resolve();
    })
};

setTimeout(() => {
    func2("func_2 ============== first", 1000)
    .then(()=>func2("func_2 ============== three",500))
    .then(()=>func2("func_2 ============== four",500))
    .then(()=>func2("func2============== fourth",300))
}, 4000);


// example 3 with async await =====================
const func3=(msg, time)=>{

    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(msg) ;
            resolve()
        }, time);
    })
}
const runAll= async()=>{
    await func3("function3________first",1000)
    await func3("function3________second", 3000)
    await func3("function3________third", 3000)

}

setTimeout(() => {
    runAll()
}, 6000);


