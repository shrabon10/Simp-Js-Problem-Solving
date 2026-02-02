const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// 1st-method 
// colors.reverse();
// console.log(colors);
const col = []
for(const color of colors){
    col.unshift(color)
}
console.log(col);




