/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 * 1. this globally calls the window/global object binding or all of javascript and its functions.
 * 2. implicit binding, this binds automatically to the object it is called inside and the object prior to `.function()` call would then be considered this.
 * 3. when a constructor function is used, points to the instance made and returned by said constructor function.
 * 4. call or apply methods used. this is defined.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function greetingWindow(name) {
    console.log(this);
    return `hello ${name} do you see window?`;
}
//greetingWindow('michael');
// Principle 2

// code example for Implicit Binding
const bandFunc = bandNames => {
    bandNames.favoriteBand = function () {
        console.log(`My favorite band is ${this.favBand}.`);
        console.log(`While your favorite band is ${this.name}.`);
        console.log(this);
    };
}
const bands = {
    favBand: 'Thrice',
    name: 'Something Corporate'
};
bandFunc(bands);
//bands.favoriteBand();

// Principle 3

// code example for New Binding



// Principle 4

// code example for Explicit Binding  