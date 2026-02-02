function WoodShop(chairQuantity, tabelQuantity, bedQuantity) {
    const perchairWood = 2000;
    const pertableWood = 1000;
    const perbedWood = 3000;

    const chairtotalWood = chairQuantity * perchairWood;
    const tabletotalWood = tabelQuantity * pertableWood;
    const bedtotalwood = bedQuantity * perbedWood;

    const totalWood = chairtotalWood + tabletotalWood + bedtotalwood;

    return totalWood
}

const Bill = WoodShop(0, 0, 1)
console.log("Your Total Bill is: ", Bill);
