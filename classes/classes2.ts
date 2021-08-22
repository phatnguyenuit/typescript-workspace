class Animal2 {
  // public name: string;
  // public by default
  // use prefix # for private field
  // private field: type
  #name: string;
  public constructor(theName: string) {
    this.#name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.#name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal2 {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

class Horse extends Animal2 {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

let sam = new Snake('Sammy the Python');
let tom: Animal2 = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);
