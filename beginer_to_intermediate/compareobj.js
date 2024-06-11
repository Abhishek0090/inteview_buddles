const obj1 = {
  name: "Abhishek",
  age: 12,
};

const obj2 = {
  name: "Pal",
  age: 12,
};
function compareObjects(obj1, obj2) {
  // Convert objects to arrays of key-value pairs
  const entries1 = Object.entries(obj1);
  const entries2 = Object.entries(obj2);

  // Check if the lengths of the arrays are different
  if (entries1.length !== entries2.length) {
    return false;
  }

  // Compare each key-value pair
  for (const [key, value] of entries1) {
    const otherValue = obj2[key];

    if (value !== otherValue) {
      return false;
    }
  }

  return true;
}

console.log(compareObjects(obj1, obj2)); // Output: true
