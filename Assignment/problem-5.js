function analyzeText(str) {
   if(typeof str !== "string" || str.trim().length === 0){
    return "Invalid";
   }
   let word = str.split(" ");
   let longwords = "";

   for(let words of word){
        if (words.length > longwords.length) {
            longwords = words;
        }
   }
   const Number = str.split(" ").join('').length;

   return {
  longwords: longwords,   
  token: Number
    }
}
console.log(analyzeText(" "));
