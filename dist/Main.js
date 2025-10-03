import Cat from "./Cat.js";
import Data from "./Data.js";
import Dog from "./Dog.js";
const cat = new Cat();
console.log(`Name is currently ${cat.getName()}`);
cat.setName("Garfield");
console.log(`Name has been changed to ${cat.getName()}`);
const data = new Data("database");
data.insert("Cat", cat);
const kitty = new Cat("Whiskers");
kitty.speak(); // meow
kitty.speak("purr");
kitty.setName("Felix");
console.log(kitty.getName()); // ['Whiskers', 'Felix']
console.log(kitty.getAverageNameLength()); // average length
for (let i = 0; i < 5; i++)
    kitty.speak(); // age increments after 5th speak
const doggo = new Dog("Rex");
doggo.bark(); // woof
doggo.bark("grrr");
doggo.setName("Buddy");
console.log(doggo.getNames()); // ['Rex', 'Buddy']
console.log(doggo.getAverageNameLength()); // average length
for (let i = 0; i < 5; i++)
    doggo.bark(); // age increments after 5th bark
console.log(`Dog age: ${doggo.getAge()}`);
