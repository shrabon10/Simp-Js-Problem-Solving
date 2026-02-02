function longestWord (stenence){
    const words = stenence.split(" ")
    let longest = "";
    for(let word of words){
        if (word.length > longest.length) {
            longest = word
        }
    }
    return longest;
}
const text = "I am learning Programming to become a programmer";
console.log(longestWord(text));