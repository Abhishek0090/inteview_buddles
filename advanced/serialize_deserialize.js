class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function serialize(root) {
  if (!root) return "";
  const queue = [root];
  let result = "";

  while (queue.length) {
    const node = queue.shift();
    if (!node) {
      result += "null ";
    } else {
      result += node.val + " ";
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return result.trim();
}

function deserialize(data) {
  if (!data) return null;
  const nodes = data.split(" ");
  const root = new TreeNode(parseInt(nodes[0]));
  const queue = [root];

  for (let i = 1; i < nodes.length; i += 2) {
    const parent = queue.shift();
    if (nodes[i] !== "null") {
      parent.left = new TreeNode(parseInt(nodes[i]));
      queue.push(parent.left);
    }
    if (nodes[i + 1] !== "null") {
      parent.right = new TreeNode(parseInt(nodes[i + 1]));
      queue.push(parent.right);
    }
  }

  return root;
}
