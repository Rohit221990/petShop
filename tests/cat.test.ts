import Cat from '../src/Cat';

describe('Cat class', () => {
  test('initial age is between 5 and 10', () => {
    for (let i = 0; i < 50; i++) {
      const cat = new Cat();
      expect(cat.getAge()).toBeGreaterThanOrEqual(5);
      expect(cat.getAge()).toBeLessThanOrEqual(10);
    }
  });

  test('speak() outputs "meow" if no argument supplied', () => {
    const cat = new Cat();
    console.log = jest.fn();

    cat.speak();
    expect(console.log).toHaveBeenCalledWith('meow');
  });

  test('speak() outputs passed argument if supplied', () => {
    const cat = new Cat();
    console.log = jest.fn();

    const sound = 'purr';
    cat.speak(sound);
    expect(console.log).toHaveBeenCalledWith(sound);
  });

  test('setName updates name and records history', () => {
    const cat = new Cat('Tom');
    cat.setName('Jerry');
    expect(cat.getName()).toBe('Jerry');
    expect(cat.getNames()).toEqual(['Tom', 'Jerry']);
  });

  test('getAverageNameLength returns correct average name length', () => {
    const cat = new Cat();
    cat.setName('Tom');
    cat.setName('Jerry');
    cat.setName('Spike');
    const expectedAvg = (3 + 5 + 5) / 3;
    expect(cat.getAverageNameLength()).toBeCloseTo(expectedAvg);
  });
});
