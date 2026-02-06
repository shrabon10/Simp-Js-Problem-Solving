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

let results = finalScore("!@#");
console.log(results);






