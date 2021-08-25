import { LinkedList } from './LinkedList';

const linkedList = new LinkedList<number>();

console.log('isEmpty', linkedList.isEmpty);

linkedList.append(10);
linkedList.append(15);
linkedList.append(20);

const isInserted = linkedList.insert(2, 45);

console.log('isInserted', isInserted);
console.log('isEmpty', linkedList.isEmpty);
console.log('size', linkedList.size);

console.log('Linked list');
linkedList.print();

console.log('indexOf 15:', linkedList.indexOf(15));
console.log('Remove 15');
linkedList.remove(15);
console.log('size', linkedList.size);

console.log('Linked list');
linkedList.print();
