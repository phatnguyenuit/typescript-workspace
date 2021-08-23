export class Node<TElement = any> {
  element: TElement;
  next: Node<TElement> | null;

  constructor(element: TElement) {
    this.element = element;
    this.next = null;
  }

  toString() {
    return `${this.element}`;
  }
}
