var panda = 'happy';

// test if sunrise comes from east
var sunrise_from_east = true;
var sunrise_from_west = false;

// test if x and y is the same
var x = 999;
var y = 999;

// test if object foo and bar is not an 'equal' object
var foo = {
  a: 12,
  b: 34
};
var bar = {
  a: 13,
  b: 34
};

// test if there's a word cali in the phrase given
var phrase = "supercalifragilisticexpialidocious"

// test if calculation is greater than any number
var calculation = 1000 / 0;

// check if an inner function won't be called if checkTrue is false
var doThis = function(checkTrue, thenThis) {
  if (checkTrue) {
    thenThis();
  }
};

// test if a Person object have at least name, age and gender
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.getName = function() {
    return this.name;
  };
  this.setAge = function(num) {
    this.age += num;
  }
  this.getAge = function() {
    return this.age
  }
}

// test if Person.getName is called, it will return person's name
// test both within one test spec

// test if Person.addAge is called, it will changes Person's age
// also test if the function can be called
// pass along newly created object across multiple specs

// add spec from previous suite to check if age accepts a number

// check if getAge method can be called and returns a number output
