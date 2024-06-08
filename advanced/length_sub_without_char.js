function lengthOfLongestSubstring(s) {
  let maxLen = 0;
  let start = 0;
  const charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charMap.has(char) && charMap.get(char) >= start) {
      start = charMap.get(char) + 1;
    }
    charMap.set(char, i);
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}
