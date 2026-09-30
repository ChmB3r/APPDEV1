// Block scope
if (true) {
  let insideBlock = "only visible in here";
  console.log(insideBlock);
}
try {
  console.log(insideBlock);
} catch (error) {
  console.log("insideBlock is not defined out here:", error.name);
}

// Closure
function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}

const clicksA = createCounter();
const clicksB = createCounter();

console.log(clicksA()); // 1
console.log(clicksA()); // 2
console.log(clicksB()); // 1 -- independent
