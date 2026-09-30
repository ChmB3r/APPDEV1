const players = [
  { name: "S0mething", score: 78 },
  { name: "Jinggg", score: 92 },
  { name: "f0rsakeN", score: 55 },
  { name: "Demon1", score: 61 },
];

const passingNames = players
  .filter(player => player.score >= 60)
  .map(player => player.name);
console.log(passingNames);

const dario = players.find(player => player.name === "Demon1");
console.log(dario);

console.log(players.some(player => player.score < 60));   // true
console.log(players.every(player => player.score >= 60)); // false

const ranked = [...players].sort((a, b) => b.score - a.score);
console.log(ranked.map(player => `${player.name}: ${player.score}`));
