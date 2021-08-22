interface Point {
  // readonly property
  readonly x: number;
  readonly y: number;
  // Indexable key
  [propertyName: string]: any;
}

let p: Point = {
  x: 10,
  y: 0,
};
// p.x = 100 Error

// Function Types
interface CompareFunction {
  (a: number, b: number): boolean;
}

let myCompare: CompareFunction = (a, b) => a > b;

// Indexable Types
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  // [x: number]: Animal;
  [x: string]: Dog;
}

interface NumberDictionary {
  [index: string]: number;
  length: number;
  // name: string; // Error because conflict with index
}

// set readonly to index key to prevent assignment
interface ReadOnlyNumberDictionary {
  readonly [index: string]: number;
  length: number;
  name: number;
}

// Class Types
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface2;
}
interface ClockInterface2 {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number,
): ClockInterface2 {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface2 {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep');
  }
}
class AnalogClock implements ClockInterface2 {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock');
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();
