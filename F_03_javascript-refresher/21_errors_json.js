function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(20, 4));
  console.log(divide(8, 0));
} catch (error) {
  console.log("Oops, something went wrong:", error.message);
}

// JSON
const book = { title: "Clean Code", pages: 464, isRead: false };

const jsonText = JSON.stringify(book);
console.log(jsonText);

const parsedBook = JSON.parse(jsonText);
console.log(parsedBook.title);
console.log(typeof jsonText, typeof parsedBook); // string object

// Bad JSON is another classic try/catch case
try {
  JSON.parse("{not valid json}");
} catch (error) {
  console.log("Invalid JSON:", error.name);
}
