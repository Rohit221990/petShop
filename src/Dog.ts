class Dog {
  #name: string | undefined;
  #age: number;
  #favoriteFood: string | null;
  #namesHistory: string[];
  #barkCount: number;

  constructor(initialName: string | undefined = undefined) {
    this.#age = Math.floor(Math.random() * 6) + 5; // random between 5 and 10
    this.#name = initialName;
    this.#favoriteFood = null;
    this.#namesHistory = [];
    if (initialName) this.#namesHistory.push(initialName);
    this.#barkCount = 0;
    console.log(`Dog instance created with name: ${this.#name}, age: ${this.#age}`);
  }

  getName(): string | undefined {
    return this.#name;
  }

  getAge(): number {
    return this.#age;
  }

  getFavoriteFood(): string | null {
    return this.#favoriteFood;
  }

  setName(newName: string): void {
    if (newName !== this.#name) {
      this.#name = newName;
      this.#namesHistory.push(newName);
      console.log(`Dog name set to: ${newName}`);
    }
  }

  getNames(): string[] {
    return [...this.#namesHistory];
  }

  getAverageNameLength(): number {
    if (this.#namesHistory.length === 0) return 0;
    const totalLength = this.#namesHistory.reduce(
      (acc, name) => acc + name.length,
      0
    );
    return totalLength / this.#namesHistory.length;
  }

  bark(sound?: string): void {
    this.#barkCount++;
    if (!sound) {
      console.log("woof");
    } else {
      console.log(sound);
    }
    if (this.#barkCount % 5 === 0) {
      this.#age++;
      console.log(`Dog's age increased to ${this.#age} after barking 5 times`);
    }
  }

  setAge(newAge: number): void {
    this.#age = newAge;
  }

  setFavoriteFood(newFavoriteFood: string): void {
    this.#favoriteFood = newFavoriteFood;
  }
}

export default Dog;