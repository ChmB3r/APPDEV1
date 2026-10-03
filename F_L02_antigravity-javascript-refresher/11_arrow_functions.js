// Original: function greet(name) { return "Hey, " + name + "!"; }
const greet = name => "Hey, " + name + "!"; // implicit return

// Original: function square(n) { return n * n; }
const square = n => n * n; // implicit return

// Original: function sayHi() { console.log("Hi there!"); }
const sayHi = () => {
  console.log("Hi there!");
};

console.log(greet("JR"));
console.log(square(9));
sayHi();
