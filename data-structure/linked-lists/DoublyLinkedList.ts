import { LinkedList } from './LinkedList';
import { DoublyNode } from './DoublyNode';

export class DoublyLinkedList<TElement> extends LinkedList<TElement> {
  protected head: DoublyNode<TElement> | null;
  protected tail: DoublyNode<TElement> | null;
  protected separator: string = '<=>';

  constructor() {
    super();
    this.head = null;
    this.tail = null;
  }

  append(element: TElement) {
    this.insert(this.length, element);
  }

  insert(position: number, element: TElement): boolean {
    if (position < 0 || position > this.length) return false;

    const node = new DoublyNode(element);

    let prevNode: DoublyNode<TElement> | null = null;
    let currentNode = this.head;

    if (position === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = currentNode;
        currentNode!.prev = node;
        this.head = node;
      }
    } else if (position === this.length) {
      currentNode = this.tail;
      currentNode!.next = node;
      node.prev = currentNode;

      this.tail = node;
    } else {
      let index = 0;

      while (index++ < position) {
        prevNode = currentNode;
        currentNode = currentNode?.next ?? null;
      }

      node.next = currentNode;
      prevNode!.next = node;

      currentNode!.prev = node;
      node.prev = prevNode;
    }

    this.length += 1;

    return true;
  }

  removeAt(position: number): TElement | null {
    if (position < 0 || position >= this.length) return null;

    let currentNode = this.head;

    if (position === 0) {
      this.head = currentNode?.next ?? null;

      if (this.length === 1) {
        this.tail = null;
      } else {
        this.head!.prev = null;
      }
    } else if (position === this.length - 1) {
      // remove tail
      currentNode = this.tail!.prev;
      currentNode!.next = null;

      this.tail = currentNode;
    } else {
      let index = 0;
      let prevNode: DoublyNode<TElement> | null = null;
      while (index++ < position) {
        prevNode = currentNode;
        currentNode = currentNode?.next ?? null;
      }

      prevNode!.next = currentNode?.next ?? null;
      currentNode!.next!.prev = prevNode;
    }

    this.length -= 1;

    return currentNode?.element ?? null;
  }
}
