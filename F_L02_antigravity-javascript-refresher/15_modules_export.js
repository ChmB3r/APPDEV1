const userInfo = { name: "JR", age: 20, favoriteDrink: "Coffee" };

function greet() {
  return "Greetings from the export file!";
}

export default greet;
export { userInfo };
