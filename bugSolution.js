function foo(a, b) {
  //Improved input validation.  Explicitly checking for null or undefined
  if (a === null || a === undefined || b === null || b === undefined) {
    return NaN; // Return NaN for null or undefined inputs
  }

  //Use Number() to perform type coercion
  a = Number(a);
  b = Number(b);

  // Check if inputs are numbers after type coercion
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Return NaN if either input is not a number
  }

  return a + b;
}

console.log(foo(null, 5)); // Output: NaN
console.log(foo(10, null)); // Output: NaN
console.log(foo(5, 10)); // Output: 15
console.log(foo('5', 10)); // Output: 15
console.log(foo('abc',10)); // Output: NaN