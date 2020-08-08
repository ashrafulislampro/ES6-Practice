// function  doubleIt(num) {
//     return num * 2;    
// }



// const doubleIt = function name(num) {
//     return num*2;
// }


const doubleIt = num => num * 2;
const add = (x , y) => x + y;
const give4 = () => 5;
const doMath = (x , y)=> {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(23 , 3);
const result2 = give4();

const result5 = doMath(8 , 6);
console.log(result5);