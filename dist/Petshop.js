import Cat from "./Cat.js";
import Dog from "./Dog.js";
import Data from "./Data.js";
const data = new Data("database");
export const savedPets = [];
export function saveTest() {
    data.beginTran();
    let localSaved = [];
    try {
        const cat = new Cat("TestCat");
        data.insert("Cat", cat);
        localSaved.push(cat);
        const dog = new Dog("TestDog");
        data.insert("Dog", dog);
        localSaved.push(dog);
        data.commit();
        savedPets.push(...localSaved);
    }
    catch (err) {
        data.rollback();
        console.error("saveTest failed, transaction rolled back:", err);
    }
}
export function savePetShop() {
    data.beginTran();
    let localSaved = [];
    try {
        const pets = [];
        for (let i = 0; i < 3; i++) {
            pets.push(new Cat());
            pets.push(new Dog());
        }
        // Batch insert simulation
        for (const pet of pets) {
            const type = pet instanceof Cat ? "Cat" : "Dog";
            data.insert(type, pet);
            localSaved.push(pet);
        }
        data.commit();
        savedPets.push(...localSaved);
    }
    catch (err) {
        data.rollback();
        console.error("savePetShop failed, transaction rolled back:", err);
    }
}
export function logStats() {
    const total = savedPets.length;
    const cats = savedPets.filter((pet) => pet instanceof Cat);
    const dogs = savedPets.filter((pet) => pet instanceof Dog);
    console.log(`Total pets saved: ${total}`);
    console.log(`Total cats saved: ${cats.length}`);
    console.log(`Total dogs saved: ${dogs.length}`);
    if (cats.length) {
        const avgCatNameLen = cats.reduce((acc, c) => acc + c.getAverageNameLength(), 0) / cats.length;
        console.log(`Average cat name length: ${avgCatNameLen.toFixed(2)}`);
    }
    if (dogs.length) {
        const avgDogNameLen = dogs.reduce((acc, d) => acc + d.getAverageNameLength(), 0) / dogs.length;
        console.log(`Average dog name length: ${avgDogNameLen.toFixed(2)}`);
    }
}
// Run tests
saveTest();
savePetShop();
logStats();
