let favoriteFoods = ["Chicken Cury", "Fried Chicken", "Adobo"];
favoriteFoods.push("Sinigang");
favoriteFoods.shift();

for (const food of favoriteFoods) {
  console.log(food);
}

console.log("<------------------------------------------>")

const liked = favoriteFoods.map(food => `One of my favorite food is ${food}`);
console.log(liked);

console.log("<------------------------------------------>")
