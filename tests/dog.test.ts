import Dog from '../src/Dog';

describe('Dog class unit tests', () => {
  test('initial age is between 5 and 10', () => {
    for (let i = 0; i < 50; i++) {
      const dog = new Dog();
      expect(dog.getAge()).toBeGreaterThanOrEqual(5);
      expect(dog.getAge()).toBeLessThanOrEqual(10);
    }
  });

  test('bark() outputs "woof" by default', () => {
    const dog = new Dog();
    console.log = jest.fn();

    dog.bark();
    expect(console.log).toHaveBeenCalledWith('woof');
  });

  test('bark() outputs provided sound', () => {
    const dog = new Dog();
    console.log = jest.fn();

    dog.bark('grrr');
    expect(console.log).toHaveBeenCalledWith('grrr');
  });

  test('age increments by 1 every 5 barks', () => {
    const dog = new Dog();
    const initialAge = dog.getAge();
    console.log = jest.fn();

    for (let i = 1; i <= 10; i++) {
      dog.bark();
      const expectedAge = initialAge + Math.floor(i / 5);
      expect(dog.getAge()).toBe(expectedAge);
    }
  });

  test('setName() changes name and tracks history', () => {
    const dog = new Dog('Rex');
    expect(dog.getName()).toBe('Rex');

    dog.setName('Buddy');
    dog.setName('Max');

    expect(dog.getName()).toBe('Max');
    expect(dog.getNames()).toEqual(['Rex', 'Buddy', 'Max']);
  });

  test('getAverageNameLength() returns correct average', () => {
    const dog = new Dog();
    dog.setName('Rex');
    dog.setName('Buddy');
    dog.setName('Max');

    const expectedAvg = (3 + 5 + 3) / 3;
    expect(dog.getAverageNameLength()).toBeCloseTo(expectedAvg);
  });
});
