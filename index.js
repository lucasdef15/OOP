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
console.log(person.getName());
console.log(person.getAge());
person.setAge(30);
person.setAge(35);
console.log(person.getAge());
