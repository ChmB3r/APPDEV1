function greet(student) {
  return "Hello, " + student;
}
 
const floor = (num) => {
  return Math.floor(num);
};
 
function calculator(a, b, c) {
  return { sum: a + b + c, product: a * b * c };
}

console.log("Greeting: " + greet("ChmB3r"));

console.log("<------------------------------------------>")

console.log("Floor: " + floor(4.7));

console.log("<------------------------------------------>")

console.log("Sum: " + calculator(5, 7, 2).sum);

console.log("Product: " + calculator(5, 7, 2).product);