





const genreteHashTag = (str)=>{
    let word= str.trim().toLowerCase().split(" ");
   console.log("#"+word.join(""));

}

genreteHashTag("kawsar firoz")






// using class 
class GenreteHashTage {
    constructor(str){
        this.str = str;
    }
    addHashTage(){
        let word = this.str.trim().toLowerCase().split(" ");
        return "#"+word.join("");
    }
}
const newTag = new GenreteHashTage("kawsar firoz");
console.log(newTag.addHashTage())


