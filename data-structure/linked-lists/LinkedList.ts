import { Node } from './Node';

type LinkedListCallback<TElement = any, TReturn = void> = (
  currentNode: Node<TElement> | null,
  index: number,
  linkedList: LinkedList<TElement>,
) => TReturn;

// type LinkedListReduceCallback<TElement = any, TReturn = void> = (
//   prevValue: TReturn,
//   currentNode: Node<TElement> | null,
//   index: number,
//   linkedList: LinkedList<TElement>,
// ) => TReturn;

export class LinkedList<TElement = any> {
  length: number;
  head: Node<TElement> | null;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(element: TElement) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode: Node<TElement> | null = this.head;

      while (currentNode?.next) {
        currentNode = currentNode?.next;
      }

      currentNode.next = node;
    }

    this.length += 1;
  }

  removeAt(position: number): TElement | null {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let currentNode = this.head;
    let prevNode: Node<TElement> | null = null;
    let currentIndex = 0;

    if (position === 0) {
      this.head = currentNode?.next ?? null;
    } else {
      while (currentIndex++ < position) {
        prevNode = currentNode;
        currentNode = currentNode?.next ?? null;
      }

      prevNode!.next = currentNode?.next ?? null;
    }

    this.length -= 1;

    return currentNode?.element ?? null;
  }

  insert(position: number, element: TElement): boolean {
    if (position < 0 || position > this.length) return false;

    const newNode = new Node(element);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }

    let currentNode = this.head;
    let prevNode: Node<TElement> | null = null;
    let index = 0;

    while (index++ < position) {
      prevNode = currentNode;
      currentNode = currentNode?.next ?? null;
    }

    newNode.next = currentNode;
    prevNode!.next = newNode;

    return true;
  }

  forEach(callback: LinkedListCallback<TElement>) {
    if (!this.length) return;

    let index = 0;
    let currentNode: Node<TElement> | null = this.head;

    while (currentNode !== null) {
      callback(currentNode, index, this);

      currentNode = currentNode.next;
      index += 1;
    }
  }

  map(callback: LinkedListCallback<TElement, TElement>) {
    const transformedLinkedList = new LinkedList<TElement>();
    if (!this.length) return transformedLinkedList;

    this.forEach((currentNode, index, linkedList) => {
      const node = callback(currentNode, index, linkedList);
      transformedLinkedList.append(node);
    });

    return transformedLinkedList;
  }

  // TODO implement reduce method

  toString() {
    let str: string = '';
    this.forEach((currentNode) => {
      str += `${currentNode?.element}`;

      if (currentNode?.next) {
        str += ' => ';
      }
    });

    return str;
  }

  print() {
    console.log(`${this}`);
  }
}
