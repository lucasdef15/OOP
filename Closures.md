# Closures

## Definitions

MDN defines a closure as:

"the combination of a function and the lexical environment within which that function was declared."

This definition might not make a lot of sense if you don't know what the words "lexical environment" mean. The ES5 spec refers to a lexical environment as:

"the association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code."

In this case, the "lexical environment" refers the code as it was written in the JavaScript file. As such, a closure is:

- The function itself, and
- The code (but more importantly, the scope chain of) where the function is declared

When a function is declared, it locks onto the scope chain. You might think this is pretty straightforward since we just looked at that in the previous section. What's really interesting about a function, though, is that it will retain this scope chain -- even if it is invoked in a location other than where it was declared. This is all due to the closure!

## Creating a Closure

Every time a function is defined, closure is created for that function. Strictly speaking, then, every function has closure! This is because functions close over at least one other context along the scope chain: the global scope. However, the capabilities of closures really shine when working with a nested function (i.e., a function defined within another function).

As we saw with the remember() function earlier, it is important to note that a function maintains a reference to its parent's scope. If the reference to the function is still accessible, the scope persists!

```js
function myCounter() {
  let count = 0;

  return () => {
    count += 1;
    return count;
  };
}

let counter = myCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

A great thing about this is that you can't access the varible count externally, making it a private variable.

## Summary

A closure refers to the combination of a function and the lexical environment in which that function was declared. Every time a function is defined, closure is created for that function. This is especially powerful in situations where a function is defined within another function, allowing the nested function to access variables outside of it. Functions also keep a link to its parent's scope even if the parent has returned. This prevents data in its parents from being garbage collected.

```js
function outer() {
  let outerVar = 'I am outer';

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

const closureFunc = outer();
closureFunc(); // Output: "I am outer"
```

```js
function createPerson(name) {
  let age = 0;

  return {
    getName: function () {
      return name;
    },
    getAge: function () {
      return age;
    },
    setAge: function (newAge) {
      age = newAge;
    },
  };
}

const person = createPerson('John');
console.log(person.getName()); // Output: "John"
console.log(person.getAge()); // Output: 0
person.setAge(30);
console.log(person.getAge()); // Output: 30
```

These examples demonstrate how closures work in JavaScript by preserving the scope of variables and allowing functions to access and manipulate those variables even after the outer function has finished executing.
