function decodeString(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let str = "";
      while (stack[stack.length - 1] !== "[") {
        str = stack.pop() + str;
      }
      stack.pop(); // Remove '['

      let num = "";
      while (stack.length && !isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }
      num = parseInt(num);

      stack.push(str.repeat(num));
    }
  }

  return stack.join("");
}
