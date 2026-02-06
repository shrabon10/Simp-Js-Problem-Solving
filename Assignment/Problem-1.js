// Task-01
function newPrice(currentPrice , discount ) {
          let discoutAmount = currentPrice * discount / 100;
          let finalPrice = currentPrice - discoutAmount;
            
          if (typeof currentPrice !== "number" || typeof discount !== "number" || discount < 0 || discount > 100) {
            return "Invalid";
          }

          
         return finalPrice.toFixed(3);
}

let result = newPrice(500, "5")
console.log(result);



