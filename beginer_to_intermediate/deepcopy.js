// Original object
const originalObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

// Deep copy using JSON.parse(JSON.stringify())
const deepCopy = JSON.parse(JSON.stringify(originalObject));

// Modifying the nested object in the deep copy
deepCopy.address.city = "Los Angeles";

console.log("Original Object:", originalObject);
// Output: Original Object: { name: 'John', age: 30, address: { street: '123 Main St', city: 'New York' } }

console.log("Deep Copy:", deepCopy);
// Output: Deep Copy: { name: 'John', age: 30, address: { street: '123 Main St', city: 'Los Angeles' } }

// // Original array
// const originalArray = [1, 2, 3, [4, 5]];

// // Deep copy using JSON.parse(JSON.stringify())
// const deepCopy = JSON.parse(JSON.stringify(originalArray));

// // Modifying the nested array in the deep copy
// deepCopy[3][0] = 'modified';

// console.log('Original Array:', originalArray);
// // Output: Original Array: [1, 2, 3, [4, 5]]

// console.log('Deep Copy:', deepCopy);
// Output: Deep Copy: [1, 2, 3, ['modified', 5]]
