// .map() -- transform an array
const snacks = ["mango", "chips", "taho"];
snacks.map(snack => console.log(`Snack: ${snack}`));

// Destructuring -- pull values out of an object
const gamer = { handle: "NightOwl", level: 42 };
const { handle, level } = gamer;
console.log(handle, level);

// Spread -- copy an array while adding to it
const scores = [10, 20, 30];
const moreScores = [...scores, 40, 50];
console.log(moreScores);
