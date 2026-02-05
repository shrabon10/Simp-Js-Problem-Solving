let str = ['I','Love','Coding','In', 'Javascript']

function concat(str){
    let arr = [""];
    for(let i = 0; i<=str.length; i++){
        arr += str[i]
    }
    return arr;
}
console.log(concat(str));

