const heights2 = [167, 190, 120, 165, 137];
function getmin (numbers){
    let min = numbers[0];
    for(let number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}

let minNum = getmin(heights2)
console.log(minNum);
