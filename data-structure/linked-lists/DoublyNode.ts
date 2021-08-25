import { Node } from './Node';

export class DoublyNode<TElement> extends Node<TElement> {
  prev: DoublyNode<TElement> | null;
  next: DoublyNode<TElement> | null;

  constructor(element: TElement) {
    super(element);
    this.prev = null;
    this.next = null;
  }
}
