/*
    Write a function called same, which accepts two arrays. The function should return true if 
    every value in the array has its corresponding value squared in the second array. The frequency of the 
    values must be the same. 
*/

const same = (arr1, arr2) => {

    if(arr1.length !== arr2.length) {
        return false;
    }

    // now we iterate through the arrays of equal length 

    let length = arr1.length;

    for (let i = 0; i < length; i++) {
        let firstArrayValue = arr1[i];
        let secondArrayValue = arr2[i];

        if (secondArrayValue !== Math.sqrt(firstArrayValue)) {
            return false;
        }
    }
    // if we got through the array with all values being arr1^2 === arr2 then it is 'same'
    return true;
}

module.exports = same;

/*
    Complexity analysis: 

    Time : O(n)
    Space: O(n)
*/