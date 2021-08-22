export class Queue<TItem = any> {
  protected items: TItem[];

  constructor() {
    this.items = [];
  }

  get isEmpty(): boolean {
    return this.items.length == 0;
  }

  get size(): number {
    return this.items.length;
  }

  enqueue(element: TItem) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}
