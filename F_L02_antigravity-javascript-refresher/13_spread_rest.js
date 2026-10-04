const numbers = [7, 14, 21];
const extended = [...numbers, 28, 35];
console.log("Extended:", extended);
console.log("Original numbers (unchanged):", numbers);

console.log("<------------------------------------------>");

const user = { username: "ChmB3r", followers: 100 };
const updatedUser = { ...user, verified: true };
console.log("Updated user:", updatedUser);
console.log("Original user (unchanged):", user);

console.log("<------------------------------------------>");

function sum(...args) {
  console.log("Rest operator gathered these arguments into args array:", args);
  return args.reduce((total, n) => total + n, 0);
}
console.log("Sum result:", sum(5, 10, 15, 20));
