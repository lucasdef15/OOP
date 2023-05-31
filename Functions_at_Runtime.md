# First-Class Functions

## Functions are First-Class Functions

In JavaScript, functionsd are first-class functioins. This means that you can do with a function just about anything that you can do with other elements, such as numbers, strings, abjects, arrays, etc. Javascript functions can:

- Be stored in variable.
- Be returned from a function.
- Be passed as arguments into another function.

Note that while we can, say, treat a function as an object, a key difference between a function and an object is that functions can be called (i.e., invoked with ()), while regular objects cannot.

## Functions Can Return Functions

Given that functions in JS are first-class functions we can treat a function as a value and just return a function from another function. A function that returns a function is known as higher-order functions.

```js
function alertThenReturn() {
  alert('Message 1!');

  return function () {
    alert('Message 2!');
  };
}
```

If alertThenReturn() is invoked in a browser, we'll first see an alert message that says 'Message 1!', followed by the alertThenReturn() function returning an anonymous function. However, we don't actually see an alert that says 'Message 2!', since none of the code from the inner function is executed. How do we go about executing the returned function?

Since alertThenReturn() returns that inner function, we can assign a variable to that return value:

```js
const innerFunction = alertThenReturn();
```

We can then use the innerFunction variable like any other function!

```js
innerFunction();

// alerts 'Message 2!'
```

Likewise, this function can be invoked immediately without being stored in a variable. We'll still get the same outcome if we simply add another set of parentheses to the expression alertThenReturn();:

```js
alertThenReturn()();

// alerts 'Message 1!' then alerts 'Message 2!'
```
