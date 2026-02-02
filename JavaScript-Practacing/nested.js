function checkResult(myScore, friendScore) {
  if (myScore > 80) {
    if (friendScore > 80) {
      console.log("Go for a lunch");
    } else if (friendScore >= 60) {
      console.log("Good luck next time");
    } else if (friendScore >= 40) {
      console.log("Message unseen");
    } else {
      console.log("Block friend");
    }
  } else {
    console.log("Go home, sleep and act sad");
  }
}

checkResult(85, 82);
checkResult(85, 65);
checkResult(85, 45);
checkResult(85, 30);
checkResult(70, 90);

