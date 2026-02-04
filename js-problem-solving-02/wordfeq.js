function wordfrequency(sentence) {
    let word = sentence.split(" ");
    let wordCount = {};

    for(let words of word){
        if(wordCount.hasOwnProperty(words)){
            wordCount[words]++;
        }
        else{
            wordCount[words] = 1;
        }
    }
    return wordCount;
}

let output = wordfrequency("I Love JS and i Love Coding and i love probelm solving in JS")
console.log(output);
