const aboutMe = {
  name: "ChmB3r",
  age: 19,
  course: "BSIS-3",
  Hobbies: "Reading Manga/Manhwa and Watching Anime.",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old, and I'm a student of ${this.course}.`);
  }
};
 
aboutMe.introduce();

console.log("<------------------------------------------>")

console.log("Hobbies: " + aboutMe.Hobbies);

console.log("<------------------------------------------>")