// Solution 2
const removeDuplicates = (numbers: number[]): number[] => {
    const arr: number[] = [];
    numbers.forEach((number) => {
      if (arr.indexOf(number) == -1) {
        arr.push(number);
      }
    });
    return arr;
  };