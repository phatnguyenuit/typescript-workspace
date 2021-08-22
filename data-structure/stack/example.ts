import { Stack } from './Stack';

const stack = new Stack<number>();

console.log('isEmpty:', stack.isEmpty);

stack.push(5);
console.log('top item', stack.peek());

stack.push(4);
console.log('top item', stack.peek());
