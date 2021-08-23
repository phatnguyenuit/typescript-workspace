import { LinkedList } from './LinkedList';

const linkedList = new LinkedList<number>();

linkedList.append(10);
linkedList.append(15);
linkedList.append(20);

const isInserted = linkedList.insert(2, 45);

console.log('isInserted', isInserted);

console.log('Linked list');
linkedList.print();
