# JavaScript Refresher Reflection

### 00_script_in_html.html

- I've learned that to run JavaScript in an HTML page, I need a `<script>` tag. It can hold code directly (inline) or load a separate file using `src`. A regular script pauses the page while it loads, which is why scripts are usually placed at the end of the body. I also learned that adding `type="module"` changes how the script behaves. Module scripts wait for the HTML to finish loading, have their own private scope, and let me use `import` and `export`. This makes it easier to split a project into many files and keep the code organized.

**Example:** I wrote a page with an inline script that logs a message, then changed the external script into a module script that imports a named export from another file.

### 01_base_syntax.js

- I've learned that `console.log()` is the main way to see what my code is doing, and that JavaScript is case-sensitive, so if you type in `UserName` instead of `userName`, you'll get an error or different results based what you declared.

### 02_variables.js

- I've learned that every value has a type, such as string, number, or boolean, and that `typeof` tells me which one. I also learned that `==` converts types before comparing, while `===` checks both type and value. This also mentioned by sir Jehu in our lecture in 2nd year, that the `===` is a strict equality operator while `==` is a loose equality operator.

### 03_functions.js

- I've learned that a function packages reusable logic and can be written as a regular declaration or as an arrow function. A function can only return one thing, but that one thing can be an object holding several results. Function names follow the same rules as variables and usually start with a verb.

**Example:** I wrote a calculator function that returns both the sum and the product of two numbers in a single object.

### 04_objects.js

- I've learned that an object groups related data under one name. A method is a function stored as a property, and `this` inside it refers to the object itself. I can also add new properties after the object has been created.

**Example:** I made an object about myself with an introduce method that uses `this`, then added a hobby property afterward.

### 05_arrays.js

- I've learned that arrays store ordered lists of values. `push()` adds to the end, `shift()` removes from the front, and `for...of` loops through every item. `.map()` builds a new array without changing the original.

**Example:** I built a list of favorite foods, added one, removed the first, and used `.map()` to turn each into an "One of my favorite food is \_\_\_" sentence in a for loop.

### 06_control_structures.js

- I've learned that `if...else if...else` checks conditions from top to bottom and runs the first one that's true, so the order of the conditions matters. I also learned that a `for` loop fits when I know how many times to repeat, and a `while` loop fits when I'm watching a condition.

**Example:** I wrote a grade checker that prints A, B, C, or You Failed!!! based on a score.

### 07_dom.html

- I've learned that the DOM, which is the browser's live version of the page, lets JavaScript find an element and change it directly. I used `addEventListener` to react to a button click, `prompt()` to ask the user for input, and `setTimeout()` to run code after a delay.

### 08_essential_features.js

- I've learned three features that I'll use constantly: `.map()` to transform an array, destructuring to pull values out of an object, and the spread operator to copy an array while adding new items.

**Example:** I mapped over a list of snacks, destructured a handle and level from a gamer object, and spread a list of scores into a new list with two extra numbers.

### 09_tricky_parts.js

- I've learned that `===` is safer than `==` because it never converts types. I also learned that `undefined` means a variable has no value yet, while `null` means it's empty on purpose. A regular method's `this` depends on how it's called, but an arrow function borrows `this` from where it was written. Finally, assigning an array with `=` only copies the reference, so I need spread to make a real, separate copy. To be honest, this is really confusing for me.

### 10_let_const.js

- I've learned that `let` can be reassigned, `const` can't, and `var` ignores block scope, which causes bugs. Modern JavaScript uses `let` and `const` almost exclusively. I also learned in our discussion last meeting that as long as possible we have to use `const` and `let` over `var` in our code, because `const` and `let` is more safer and it prevents us from making mistakes. It also keeps our code organized and readable.

### 11_arrow_functions.js

- I've learned that any function can be rewritten as an arrow function. With one parameter and a single expression, I can skip the braces and the `return` keyword, which is called an implicit return.

### 12_destructuring.js

- I've learned that destructuring pulls values out of objects and arrays into their own variables. It also works right inside a function's parameter list, so I can grab only the fields I need.

**Example:** I pulled the name and age out of a pet object, took two colors out of an array, and wrote a function that destructures the name directly in its parameters.

### 13_spread_rest.js

- I've learned that spread copies items or properties into a new array or object without changing the original. Rest does the opposite inside a parameter list and collects any number of arguments into one array.

### 14_classes_inheritance.js

- This time, I've learned that a class is a template for creating objects, and `extends` lets one class inherit everything from another and add its own methods. Class names use PascalCase, which is the same rule React components follow.

**Example:** I wrote a Person class that can say hello, then a Student class that extends it and adds a study method.

### 15_modules_export.js

- I actually know this since i learned it in our previous discusssion about this module system. That a file can have one default export and any number of named exports. This is how JavaScript shares code between files instead of keeping everything in one giant script.

### 16_modules_import.js

- I've learned that a default export is imported without curly braces, while named exports need curly braces and must match the exported name exactly.

### 17_logical_operators.js

- I've learned that only six values are falsy(I actually write it "cap", meaning,something untrue or lie in slang.): `false`, `0`, an empty string, `null`, `undefined`, and `NaN`. Everything else, including empty arrays and empty objects, is truthy. I also learned that `&&` and `||` return actual values, not just true or false, and this short-circuiting is how a default value can be provided.

### 18_ternary_nullish.js

- I've learned that the ternary operator packs an `if...else` into one expression. Optional chaining (`?.`) safely reads nested properties without crashing, and nullish coalescing (`??`) gives a fallback only for `null` or `undefined`. That makes `??` better than `||` when `0` is a valid value.

### 19_strings_numbers.js

- I've learned everyday string methods like `trim()`, `split()`, `includes()`, `slice()`, and `toLowerCas()` or `toUpperCase()`. For numbers, I learned `parseInt`, `parseFloat`, `toFixed`, and `Number.isNaN`, which checks whether a conversion failed.

### 20_array_methods.js

- I've learned that `.filter()` keeps items that pass a test, `.find()` returns the first match, `.some()` and `.every()` answer yes/no questions about the whole array, and `.sort()` reorders it. I also learned to copy the array before sorting, because `.sort()` changes the original.

### 21_errors_json.js

- I've learned that `try/catch` keeps my program from crashing when something fails, and I can `throw` my own errors on purpose. JSON is just text: `JSON.stringify()` turns an object into text and `JSON.parse()` turns it back into an object. I also realized while using the `try/catch`, it doesnt need to be in every code you write but use it when you know that there's a possibility that your code might fail or crash.

### 22_async_javascript.js

- I've learned that a callback is a function passed in to run later, a Promise represents a value that isn't ready yet, and `async/await` lets me write promise code that reads from top to bottom. I also learned that asynchronous code like `setTimeout` runs after the normal lines, even if it was written first.

### 23_closures_scope.js

- I've learned that `let` and `const` are block-scoped, so they only exist inside the curly braces where they're declared. I also learned that a closure is a function that remembers the variables from where it was created, even after the outer function has finished. Each counter keeps its own private count, which is the same idea behind React's `useState` i think(correct me if im wrong sir).
