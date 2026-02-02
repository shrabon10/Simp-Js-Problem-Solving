const height = [23, 48, 94, 37, 17, 93, 99, 100]

function getMax(numbers){
    let max = numbers[0];
    for(num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(height)
console.log(max);
