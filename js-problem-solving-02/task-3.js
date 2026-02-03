function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const total =
    laptopQty * laptopPrice +
    tabletQty * tabletPrice +
    mobileQty * mobilePrice;

  return total;
}


console.log(calculateElectronicsBudget(1, 1, 1)); 