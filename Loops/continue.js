for (let i = 1; i <= 40; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}


// while-loop


let i = 1;

while (i <= 40) {
  if (i % 2 !== 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
