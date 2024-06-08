function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1,
    b = 2,
    temp;
  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
