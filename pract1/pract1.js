

//========================= write a function called counteChar tha takes tow parameters : a string and a character to count. the function shuld return the number of time the specified character appears in the string.============================

const counteChar = (word, char) => {
    word = word.toLowerCase().trim();
    char = char.toLowerCase().trim();
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === char) {
            count++
        }
    }
    return count ;
}
console.log(counteChar("kawsar firoz", "f"))



// using js oops ++++++++++++++++++++++++++++++++++++++++++++
class CharCounter {
    constructor(word) {
        this.word = word.toLowerCase().trim();
    }
    count(char) {
        char = char.toLowerCase().trim();
        let count = 0;
        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] === char) {
                count++
            }

        }
        console.log(count)
    }
}


const newChar = new CharCounter("kawsar fioz")
newChar.count("k")
