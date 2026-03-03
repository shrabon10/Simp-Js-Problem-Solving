//Problem-01: New Price for Eid Sale
function newPrice(currentPrice , discount ) {
          let discoutAmount = currentPrice * discount / 100;
          let finalPrice = currentPrice - discoutAmount;
            
          if (typeof currentPrice !== "number" || typeof discount !== "number" || discount < 0 || discount > 100) {
            return "Invalid";
          }

          
         return finalPrice.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift
// Task-2
function validOtp(otp) {
    if(typeof otp !== "string") {
        return "Invalid";
    }
    if(otp.length >= 8 && otp.startsWith("ph-")){
        return true;
    }else{
        return false;
    }
    
}

//Problem-03: BCS Final Score Calculator
// task3
function finalScore (omr) {    
    const { right, wrong, skip } = omr;
    if (typeof omr !== "object" || omr === null) {
    return "Invalid";
  }
  
    if (typeof right !=="number" || typeof wrong !== "number" || typeof skip !=="number" ){
        return "Invalid";
    }

    if (right+wrong+skip !== 100) {
        return "Invalid"
    }
    let toTalMarks = (right * 1) + (wrong * (-.5)) + (skip * 0);

    return Math.round(toTalMarks)


}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    let havote = 0;
    let navote = 0;

    if (!Array.isArray(array)) {
        return "Invalid"
    }

    for(let vote of array){
        if(vote === "ha"){
            havote++;
        }
        else if(vote === "na"){
            navote++;
        }

    }
    if(havote > navote){
        return true;
    }else if (havote === navote) {
        return "equal";
    }else{
        return false;
    }

}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
   if(typeof str !== "string"){
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


