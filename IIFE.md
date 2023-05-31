# Immediately-Invoked Function Expressions (IIFE)

An immediately-invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined. Check out the following example:

```js
(function sayHi() {
  alert('Hi there!');
})();

// alerts 'Hi there!'
```

## IIFE's and Private Scope

One of the primary uses for IIFE's is to create private scope (i.e., private state). Recall that variables in JavaScript are traditionally scoped to a function. Knowing this, we can leverage the behavior of closures to protect variables or methods from being accessed! Consider the following example of a simple closure within an IIFE, referenced by myFunction:

Overall, IIFEs provide a way to create isolated scopes, manage private variables, and execute code immediately. They contribute to code organization, encapsulation, and help prevent naming conflicts, making them useful in various programming scenarios.

## Summary

An immediately-invoked function expression (IIFE) is a function that is called immediately after it is defined. Utilizing an IIFE alongside closures allows for a private scope, which maintains privacy for variables defined within them. And since less variables are created, an IIFE will help to minimize pollution of the global environment, hindering the chances of variable name collisions.
