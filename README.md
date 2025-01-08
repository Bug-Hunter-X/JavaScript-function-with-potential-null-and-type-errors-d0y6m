# JavaScript Function with Potential Null and Type Errors

This repository demonstrates a JavaScript function with a potential bug related to the handling of null and non-numeric inputs.  The original code lacks robust error handling, which can lead to unexpected behavior or crashes.

The `bug.js` file contains the original function with the potential bug.  The `bugSolution.js` file demonstrates a more robust solution that improves error handling and input validation.

## Bug Description

The original function, `foo`, attempts to add two numbers. However, it does not adequately handle cases where the inputs are null or not numbers.  This results in either incorrect results (if null) or throws a runtime error (if not numbers).