const price = [200, 300, 100, 900, 300, 500]
function getmin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const chipestPrice = getmin(price)
console.log(chipestPrice);
