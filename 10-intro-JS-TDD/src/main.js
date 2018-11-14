module.exports = add;

function add(a, b) {

    if (isANumber(a) && isANumber(b)) {
    return a + b;

    } else {
    return 0;
}


/*
   Utilities functions (just for helping)
 */

// OBS: this is quite a ugly helper method: DELETE ME!
function isUndefined(x) {
    return x === undefined;
}

// Tips: DON'T use Number.NaN
function isANumber(x) {
    return typeof(x) === 'number';
}
