const same = require('./same');

test('same will return false if array lengths are unequal', () => {
    const arr1 = [1,2,3,4];
    const arr2 = [1,2,3];

  expect(same(arr1, arr2)).toBe(false);
});

test('same will return false if array2 elements are not the square of corresponding arr1 elements', () => {
    const arr1 = [1,2,3,4];
    const arr2 = [1,2,3, 4];

  expect(same(arr1, arr2)).toBe(false);
});

test('same will return true if array2 elements are the square of corresponding arr1 elements', () => {
    const arr1 = [1,2,3,4];
    const arr2 = [1,4, 9, 16];

  expect(same(arr1, arr2)).toBe(false);
});
