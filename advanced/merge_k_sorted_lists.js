class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (!lists || lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  const merged = [];

  for (const list of lists) {
    while (list) {
      merged.push(list.val);
      list = list.next;
    }
  }

  merged.sort((a, b) => a - b);

  let head = new ListNode(merged[0]);
  let current = head;

  for (let i = 1; i < merged.length; i++) {
    current.next = new ListNode(merged[i]);
    current = current.next;
  }
}
