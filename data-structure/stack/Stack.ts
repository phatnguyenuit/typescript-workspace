export class Stack<TItem = any> {
  private items: TItem[];

  constructor() {
    this.items = [];
  }

  get isEmpty(): boolean {
    return this.items.length == 0;
  }

  get size(): number {
    return this.items.length;
  }

  push(element: TItem) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.size - 1];
  }

  clear() {
    this.items = [];
  }
}
