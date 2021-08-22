import { Queue } from './Queue';

class PriorityQueueElement<T = any> {
  constructor(public element: T, public priority: number) {}

  toString() {
    return `{element: ${JSON.stringify(this.element)}, priority: ${
      this.priority
    }}`;
  }
}

export class PriorityQueue<T = any> extends Queue<PriorityQueueElement<T>> {
  // Min priority style
  // Similar to Max priority, change the priority comparison
  enqueue(element: PriorityQueueElement<T>) {
    if (this.isEmpty) {
      this.items.push(element); // {2}
    } else {
      let added = false;
      for (let i = 0; i < this.size; i++) {
        if (element.priority < this.items[i].priority) {
          this.items.splice(i, 0, element); // {3}
          added = true;
          break; // {4}
        }
      }
      if (!added) {
        //{5}
        this.items.push(element);
      }
    }
  }

  enqueueWithPriority(item: T, priority: number) {
    const priorityElement = new PriorityQueueElement(item, priority);
    this.enqueue(priorityElement);
  }
}
