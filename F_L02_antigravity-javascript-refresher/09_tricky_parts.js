// == vs ===
console.log(7 == "7");  // true  (type conversion)
console.log(7 === "7"); // false (different types)

// undefined vs null
let notAssigned;
let intentionallyEmpty = null;
console.log(notAssigned);        // undefined
console.log(intentionallyEmpty); // null

// this: regular method vs arrow method
const band = {
  name: "The Loops",
  regularMethod: function () {
    console.log(this.name);
  },
  arrowMethod: () => {
    // Arrow borrows "this" from the module scope, which is undefined in an ES module
    console.log(this?.name);
  },
};
band.regularMethod(); // "The Loops"
band.arrowMethod();   // undefined

// Reference vs copy
const playlist = ["song A", "song B"];

const sameRef = playlist;
sameRef.push("song C");
console.log(playlist); // [ 'song A', 'song B', 'song C' ] -- changed!

const realCopy = [...playlist];
realCopy.push("song D");
console.log(playlist); // unchanged by the spread copy
console.log(realCopy); // [ 'song A', 'song B', 'song C', 'song D' ]
