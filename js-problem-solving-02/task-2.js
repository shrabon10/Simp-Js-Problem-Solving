const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(name){
    let small = name[0];
    for(const names of name){
        if(names.length < small.length){
            small = names;
        }
    }
    return small;
}

const SmName = smallestName(heights2)
console.log(SmName);
