// Solution 3
const countWordOccurrences = (sentence: string, word: string): number => {
  let count: number = 0;
  const sentenceSplit: string[] = sentence.split(" ");
  sentenceSplit.forEach(
    (term) => term.toLowerCase() == word.toLowerCase() && count++
  );
  return count;
};
