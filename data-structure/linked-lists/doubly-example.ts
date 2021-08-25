import { DoublyLinkedList } from './DoublyLinkedList';

const doublyLinkedList = new DoublyLinkedList<number>();

console.log('isEmpty', doublyLinkedList.isEmpty);
console.log('size', doublyLinkedList.size);

doublyLinkedList.append(12);
doublyLinkedList.append(20);

console.log('isEmpty', doublyLinkedList.isEmpty);
console.log('size', doublyLinkedList.size);

doublyLinkedList.insert(1, 35);
console.log('isEmpty', doublyLinkedList.isEmpty);
console.log('size', doublyLinkedList.size);

doublyLinkedList.print();
