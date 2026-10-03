const pet = { name: "Cici", age: 3 };
const { name, age } = pet;
console.log(name, age);

const colors = ["Black", "White", "Gray"];
const [color1, color2] = colors;
console.log(color1, color2);

function printPetName({ name }) {
  console.log(`My pet is ${name}`);
}
printPetName(pet);
