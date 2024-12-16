// Solution 1
function sumArray(numbers: number[]): number {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); //Output 15

