# Object Overview

## Passing an Object

Object in javascript are mutable wich mean they change when you refer to it, like If you pass an object into a function, Javascript passes a reference to that object.

```js
let originalObject = {
  favoriteColor: 'red',
};

function setToBlue(object) {
  object.favoriteColor = 'blue';
}

setToBlue(originalObject);

originalObject.favoriteColor;
// 'blue'
```

How did this happen? Well, since objects in JavaScript are passed by reference, if we make changes to that reference, we're actually directly modifying the original object itself!

What's more: the same rule applies when re-assigning an object to a new variable, and then changing that copy. Again, since objects are passed by reference, the original object is changed as well.
