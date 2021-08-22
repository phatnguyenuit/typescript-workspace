import { Queue } from './Queue';

/**
  The circular queue – Hot Potato
  We also have another modified version of the queue implementation, which is the
  circular queue. An example of a circular queue is the Hot Potato game. In this game,
  children are organized in a circle, and they pass the hot potato to the neighbor as fast
  as they can. At a certain point of the game, the hot potato stops being passed around
  the circle of children and the child that has the hot potato is removed from the circle.
  This action is repeated until there is only one child left (the winner).
**/

function hotPotato(nameList: string[], num: number) {
  const queue = new Queue<string>(); // {1}
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]); // {2}
  }
  let eliminatedName = '';
  while (queue.size > 1) {
    for (let i = 0; i < num; i++) {
      const item = queue.dequeue();

      if (item) {
        queue.enqueue(item); // {3}
      }
    }
    eliminatedName = queue.dequeue() ?? ''; // {4}
    console.log(eliminatedName + ' was eliminated from the Hot Potato game.');
  }
  return queue.dequeue(); // {5}
}
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const winner = hotPotato(names, 7);
console.log('The winner is: ' + winner);
