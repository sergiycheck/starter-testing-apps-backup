// aabbc -> c 
// aabbcc -> null 
// aabcc -> b 
// abcabdcabc -> d

export function findFirstUniqueChar(str: string): string | null {
  return str.split('').reverse().reduce((acc, char, index, arr) => {
      if (arr.indexOf(char) === arr.lastIndexOf(char)) {
        return char;
      }
      return acc;
  }, null);
}