function countNum(numbers, target){
    let count = 0;
    for (let num of numbers){
        if (num === target){
            count ++;
        }
    }
    return count
}
let numbers = [5,6,11,12,98,5]
console.log(countNum(numbers, 5)); 


