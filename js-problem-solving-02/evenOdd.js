let arr = [23, 48, 21, 80, 21, 40, 33, 48]

let answerArr = arr.filter((number) =>{
    if(number % 2 === 0){
        return true;
    }else{
        return false
    }
})

// console.log(answerArr);

let num = [2, true, 'srabon', 'shaker', null]

let answer = num.filter((nums) =>{
    if(typeof(nums) === 'string'){
        return true;
    }else{
        return false;
    }
})
// console.log(answer);

let arrs = [10, 20, 30, 5000]

let ans = arrs.reduce((acc, cur)=> {
    return acc + cur;
}, 0);
// console.log(ans);


let price = [340, 530, 3210, 5000]


function getSum(price){
    let sum = 0;
    let len = price.length;
    for(let index = 0; index<len; index++){
        sum += price[index];
    }
    return sum;
}
let totalSum = getSum(price)
console.log(totalSum);





