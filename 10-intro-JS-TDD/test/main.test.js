const add = require('../src/main');

/*
   TODO: Make me pass! (step 1)
 */
test('should return 0 when empty string provided', () => {
    expect(add('')).toBe(0);
});


test('should return sum when to integers are provided', () => {
    expect(add(4, 5)).toBe(9);
});


/* TODO: uncomment me, run and make me pass! (step 3)
test('should return the value of the only numeric parameter when the other parameter is not a number', () => {
    expect(add("yo!", 6)).toBe(6);
});
*/
