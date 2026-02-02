// var Height = parseFloat("Enter Your Height");
// var Weight = parseFloat("Enter Your Weight");

// var bmi = Weight / (Height * Height)

// if(bmi < 18.5){
//     console.log("BMI : ", bmi.toFixed(2));
//     console.log("Your are Underweight");
// }
// else if(bmi >= 18.5 && bmi <=24.9){
//     console.log("BMI : ", bmi.toFixed(2));
//     console.log("Your are Normal");
// }
// else if(bmi >= 25 && bmi <= 29.9){
//     console.log("BMI : ", bmi.toFixed(2));
//     console.log("Your are Overweight");
// }
// if(bmi < 18.5){
//     console.log("Your are Botka");
// }
// Taking user input
let weight = Number(process.argv[2]);
let height = Number(process.argv[3]);

if (!weight || !height) {
  console.log("Usage: node BMI.js <weight> <height>");
  process.exit();
}

let bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));

if (bmi < 18.5) {
  console.log("You are underweight.");
} else if (bmi <= 24.9) {
  console.log("You are normal.");
} else if (bmi <= 29.9) {
  console.log("You are overweight.");
} else {
  console.log("You are obese.");
}

