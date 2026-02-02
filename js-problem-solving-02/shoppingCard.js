const product = [
    {name : 'Shampoo', price : 200, quantity : 5},
    {name : 'shrit', price : 900, quantity : 2},
    {name : 'sunglass', price : 700, quantity : 4},
    {name : 'facewash', price : 500, quantity : 2},
]

function Prices (product){
    let item = product[0]
    for(const products of product){
        if (item.Prices < product.price ) {
            item = products
        }
    } 
    return item
}

const chep = Prices(product)
console.log(chep);


