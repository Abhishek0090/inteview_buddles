class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseKGroup(head, k) {
  let current = head;
  let count = 0;

  while (current && count < k) {
    current = current.next;
    count++;
  }

  if (count === k) {
    current = reverseKGroup(current, k);
    while (count-- > 0) {
      const temp = head.next;
      head.next = current;
      current = head;
      head = temp;
    }
    head = current;
  }

  return head;
}
