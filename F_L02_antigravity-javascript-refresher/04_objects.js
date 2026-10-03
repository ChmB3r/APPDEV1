const aboutMe = {
  name: "ChmB3r",
  age: 19,
  course: "BSIS-3",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old, and I'm a student of ${this.course}.`);
  }
};
 
aboutMe.hobby = "Reading Manga/Manhwa and Watching Anime.";
aboutMe.introduce();

console.log("<------------------------------------------>")

console.log("Hobby: " + aboutMe.hobby);

console.log("<------------------------------------------>")