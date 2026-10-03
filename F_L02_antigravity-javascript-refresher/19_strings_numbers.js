// Strings
const raw = "   JR BALMACEDA   ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toLowerCase());        // jr
console.log(clean.includes("BALMACEDA"));   // true
console.log(clean.slice(0, 2));          // JR
console.log(clean.length);
console.log(`Full name: ${first} ${last}`);

// Numbers
console.log(parseInt("300px"));      // 300
console.log(parseFloat("4.75kg"));   // 4.75
console.log((7.98765).toFixed(2));   // "7.99"

const broken = "xyz" / 2;
console.log(broken);                 // NaN
console.log(Number.isNaN(broken));   // true
