import greet from "./15_modules_export.js";
import { userInfo } from "./15_modules_export.js";

console.log(greet());
console.log(`Name: ${userInfo.name}, Age: ${userInfo.age}, Fav Drink: ${userInfo.favoriteDrink}`);
