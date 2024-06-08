function maxSlidingWindow(nums, k) {
  if (!nums || k <= 0) return [];
  const deque = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove elements from the deque that are out of the current window
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Remove elements from the deque that are smaller than the current value
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // Add the maximum value to the result array
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
