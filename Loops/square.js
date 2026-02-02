for (let i = 1; i <= 100; i++) {
  let root = Math.sqrt(i);
  if (Number.isInteger(root) && i !== 1) {
    console.log(i);
    break;
  }
}
