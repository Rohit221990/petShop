class Cat {
  #name: string | undefined;
  #age: number;
  #favoriteFood: string | null;
  #namesHistory: string[];
  #speakCount: number;

  constructor(initialName: string | undefined = undefined) {
    this.#age = Math.floor(Math.random() * 6) + 5; // random between 5 and 10
    this.#name = initialName;
    this.#favoriteFood = null;
    this.#namesHistory = [];
    if (initialName !== undefined) this.#namesHistory.push(initialName);
    this.#speakCount = 0;
  }

  getName(): string | undefined {
    return this.#name ? this.#name : "";
  }

  getAge(): number {
    return this.#age;
  }

  getFavoriteFood(): string | null {
    return this.#favoriteFood;
  }

  setName(newName: string): void {
    if (newName !== this.#name) { // only if name changed
      this.#name = newName;
      this.#namesHistory.push(newName);
    }
  }

  getNames(): string[] {
    return [...this.#namesHistory];
  }

  getAverageNameLength(): number {
    if (this.#namesHistory.length === 0) return 0;
    const totalLength = this.#namesHistory.reduce((acc, name) => acc + name.length, 0);
    return totalLength / this.#namesHistory.length;
  }

  speak(sound?: string): void {
    this.#speakCount++;
    if (!sound) {
      console.log('meow');
    } else {
      console.log(sound);
    }
    if (this.#speakCount % 5 === 0) {
      this.#age++;
        console.log(sound);
    }
  }

  setAge(newAge: number): void {
    this.#age = newAge;
  }

  setFavoriteFood(newFavoriteFood: string): void {
    this.#favoriteFood = newFavoriteFood;
  }
}

export default Cat;
