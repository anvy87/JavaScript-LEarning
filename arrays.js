let fruit = "apple"; // single item

// arrays are ordered collection of items
// any data type can be stored in arrays

let fruits = ["apple", "mango", "banana"];
console.log(fruits);
console.log(fruits[0]);

let numbers = [1, 2, 3, 4];
console.log(numbers);

let mixed = [1, 2, "banana", null, undefined];
console.log(mixed);

// changing index positions

fruits[1] = "grapes";
console.log(fruits);
console.log(typeof fruits);

console.log(Array.isArray(fruits));

// array push pop
console.log(fruits);
fruits.push("pineapple");
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(fruits.pop());

let poppedFruit = fruits.pop();
console.log(poppedFruit);

// unshift
fruits.unshift("berry");
console.log(fruits);


// shift
fruits.shift();
console.log(fruits);
console.log(fruits.shift());