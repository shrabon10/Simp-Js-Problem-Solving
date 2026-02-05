function checkPassward(password) {
    let reason = [];
    let hasUpper = false;
    let hasNum = false;
    let hasSpace = password.includes(" ");
    
    // let length = password.length;
    

    for (let i = 0; i < password.length; i++){
        let charechter = password[i];

        if (charechter >= "0" && charechter <= "9") {
            hasNum = true;
        }
        if(charechter >= "A" && charechter <= "Z"){
            hasUpper = true;
        }
    }
    if (hasNum == false) {
    reason.push("Missing number");
  }

  if (hasUpper == false) {
    reason.push("Missing uppercase");
  }

  if (hasSpace == true) {
    reason.push("Space found!!!!!");
  }
   let isValid;
  if (reason.length === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

   return {
    valid: isValid,
    reason,
  };

}

let output = checkPassward("helloworld")
console.log(output);




