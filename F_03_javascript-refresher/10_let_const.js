let nickname = "Cham";
const birthYear = 2006;

nickname = "ChmB3r"; // OK, let can be reassigned
console.log(nickname);

try {
  birthYear = 2005; // not allowed
} catch (error) {
  console.log("Error:", error.message);
}
console.log(birthYear);

// var ignores block scope
if (true) {
  var leaky = "I escape the block";
  let contained = "I stay inside";
}
console.log(leaky); // works (this is the var problem)
// console.log(contained); // ReferenceError
