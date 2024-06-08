function firstUniqChar(s) {
  const charCount = new Map();

  // Count each character
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the first unique character
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }

  return -1; // No unique character found
}
