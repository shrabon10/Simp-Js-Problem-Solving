const product = [
    {name : 'Shampoo', price : 200, quantity : 5},
    {name : 'shrit', price : 500, quantity : 3},
    {name : 'sunglass', price : 700, quantity : 4},
    {name : 'facewash', price : 500, quantity : 2},
]

function cartTotal(product){
    let total = 0
    for(const products of product){
        const thisproductCost = products.price * products.quantity;
        total = total + thisproductCost
    }
    return total
}

const bill = cartTotal(product)
console.log("Your bill is: ", bill);



