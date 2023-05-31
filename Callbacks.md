# Callbacks functions

- Higher-order function: is a function that accepts functions as parameters and/or returns a function.

- Callback function: is the actual function that is passed as an argument to another function and is later called within that function to perform a specific action.

A callback function is a function that is passed to another function with the expectation that the other function will call it. So a callback is not necessarily itself a higher-order function, but a function which receives a callback as an argument is.

```js
const higherOrderFunction = function (
  callback /*this is the actual callback function */
) {
  //the callback expects that this function will call it, and that makes the callback a callback function
  return 8 + callback();
};

const myCallback = function () {
  return 4;
};

const result = higherOrderFunction(myCallback);
console.log(result); // Output: 12
```

### Refreshing

In the context of functions, there is a distinction between parameters and arguments.

- Parameters are variables declared within the function definition. They represent the values that a function expects to receive when it is called.

- Arguments are the actual values that are passed to a function when it is called.

```js
function iceCream(flavor /*flavor is the parameter*/) {
  return `I like ${flavor} iceCreams!`;
}

iceCream('strawberry'); // 'strawberry' is the argument to iceCream()
```
