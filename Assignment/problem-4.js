
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

console.log(gonoVote(["ha", "ha", "ha", "na"])); 

