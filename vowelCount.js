// const vowel = ["a", "e", "i", "o", "u"];

// const vowelCount = (str) => {
//     str.toLowerCase()
//     console.log(str)
//     let char = [];
//     for (let i = 0; i < str.length; i++) {
//         if (vowel.includes(str[i])) {
//             console.log(str[i].toLowerCase())
//         }
//     }
// }
// console.log(vowelCount("kawsar"));



const vowel = "aeiouAEIOU";
const vowelCount = (str) => {
    
    let vouwelcount = vowel.split("");
    let count =0;
    for (let i = 0; i < vowel.length; i++) {
        if (vouwelcount.includes(str[i])){
            if(str[i].length ){
            count++
            }
        }
        
    }
    return count
    
}
console.log(vowelCount("kawsar"));


// same code with js class inheritence ==================

class TextProcessor {
    constructor(str) {
        this.str = str;
    }
}


class VowelAnalyzer extends TextProcessor {
    constructor(str){
        super(str);
        this.vowel = "aeiouAEIOU".split("")
    }

    vouwelcount(){
        let count= 0;
        for(let i=0; i<this.str.length; i++){
            if(this.vowel.includes(this.str[i])){
                if (this.str[i].length) {
                    count++
                }
            }
        }
        return count
    }
}


const newAnalyzer = new VowelAnalyzer("kawsar");

console.log("vowel---", newAnalyzer.vouwelcount())