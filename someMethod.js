const numbers = [3, 7, 5, 9];

console.log(numbers.some((number) => number % 2 === 0));


//  fill method
const myArray = new Array(10).fill(-1);
console.log(myArray);

const myArray1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(myArray1.fill(0, 2, 5));


// splice mthod
const myArray2 = ['item1', 'item2', 'item3'];

// delete
myArray2.splice(1, 1);
console.log(myArray2); // deleted item2

// insert
myArray2.splice(1, 0, 'inserted item'); // 0 for no delete
console.log(myArray2);

// insert & delete together
myArray2.splice(1, 2, "insereted item1", "inserted item2");
console.log(myArray2);