// Ternary
const examScore = 99;
console.log(examScore >= 75 ? "Pass" : "Fail");

const num = 12;
console.log(num % 2 === 0 ? `${num} is even` : `${num} is odd`);

// Optional chaining
const member = { name: "JR" }; // no address
console.log(member.address?.city); // undefined, no crash

// Nullish coalescing
const items = 0;
console.log(items || 5); // 5  -- wrong, 0 is falsy
console.log(items ?? 5); // 0  -- right, only null/undefined are replaced
