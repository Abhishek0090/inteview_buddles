// Original object
const originalObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

// Shallow copy using spread operator
const shallowCopy = { ...originalObject };

// Modifying the nested object in the shallow copy
shallowCopy.address.city = "Los Angeles";

console.log("Original Object:", originalObject);
// Output: Original Object: { name: 'John', age: 30, address: { street: '123 Main St', city: 'Los Angeles' } }

console.log("Shallow Copy:", shallowCopy);
// Output: Shallow Copy: { name: 'John', age: 30, address: { street: '123 Main St', city: 'Los Angeles' } }

// // Original array
// const originalArray = [1, 2, 3, [4, 5]];

// // Shallow copy using spread operator
// const shallowCopy = [...originalArray];

// // Modifying the nested array in the shallow copy
// shallowCopy[3][0] = 'modified';

// console.log('Original Array:', originalArray);
// // Output: Original Array: [1, 2, 3, ['modified', 5]]

// console.log('Shallow Copy:', shallowCopy);
// // Output: Shallow Copy: [1, 2, 3, ['modified', 5]]
