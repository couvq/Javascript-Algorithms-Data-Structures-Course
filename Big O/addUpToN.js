/* 
    Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including)
    some number n.
*/

const addUpToN = (n) => {
    
    let total = 0;

    for(let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

module.exports = addUpToN;