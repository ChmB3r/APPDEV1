const lottery = [7, 14, 21];
const extended = [...lottery, 28, 35];
console.log(extended);

const profile = { username: "ChmB3r", followers: 100 };
const updatedProfile = { ...profile, verified: true };
console.log(updatedProfile);

function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(5, 10, 15, 20)); // 50
