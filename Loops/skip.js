// while-loop

let i = 55;

while (i <= 85) {
  if (i % 2 === 0 || i % 5 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}


// for-loop


for (let i = 55; i <= 85; i++) {
  if (i % 2 === 0) continue;
  if (i % 5 === 0) continue;
  console.log(i);
}
