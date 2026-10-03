function greet(UserName) {
  return "Hello, " + UserName;
}
 
const square = (number) => {
  return number * number;
};
 
function calculator(a, b) {
  return { sum: a + b, product: a * b };
}

console.log("Greeting: " + greet("ChmB3r"));

console.log("<------------------------------------------>")

console.log("Square: " + square(4));

console.log("<------------------------------------------>")

console.log("Sum: " + calculator(5, 7).sum);

console.log("Product: " + calculator(5, 7).product);