const addUpToN = require('./addUpToN');

test('adds up all numbers from 1 to 2 inclusive', () => {
  expect(addUpToN(2)).toBe(3);
});

test('adds up all numbers from 1 to 5 inclusive', () => {
    expect(addUpToN(5)).toBe(15);
  });

