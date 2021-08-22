import { PriorityQueue } from './PriorityQueue';

const queue = new PriorityQueue<string>();

console.log('isEmpty', queue.isEmpty);

queue.enqueueWithPriority('Fast', 3);
queue.enqueueWithPriority('Nguyen', 1);

queue.print();
