import { Stack } from './Stack';

export function baseConverter(decimalNumber: number, base: 2 | 8 | 16) {
  const remStack = new Stack<number>();

  let remainingNumber: number;
  let baseString = '';
  const digits = '0123456789ABCDEF'; //{6}

  while (decimalNumber > 0) {
    remainingNumber = Math.floor(decimalNumber % base);
    remStack.push(remainingNumber);
    decimalNumber = Math.floor(decimalNumber / base);
  }
  while (!remStack.isEmpty) {
    baseString += digits[remStack.pop()!]; //{7}
  }
  return baseString;
}
