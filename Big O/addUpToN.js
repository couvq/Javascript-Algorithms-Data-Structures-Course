/* 
    Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including)
    some number n.
*/

const addUpToN(n) {
    
    let total = 0;

    for(let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

let total = addUpToN(5); // should be = 15

console.log(total);