function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }

  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(5, 10)); // Output: 15
console.log(foo('5', 10)); // Throws an error