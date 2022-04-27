// sort method changes our original array

const numbers = [5, 9, 1200, 3000, 60]
numbers.sort();
console.log(numbers); // sorted numbers in ASCII code

numbers.sort((a, b) => {
        return a - b;
    })
    // numbers.sort((a,b)=>a-b);
console.log(numbers);

console.log('** ** ** ** ** ** ** ** **')

// price lowToHigh or highToLow

const products = [
    { prodId: 1, prodName: "p1", price: 300 },
    { prodId: 2, prodName: "p2", price: 20 },
    { prodId: 3, prodName: "p3", price: 3000 },
    { prodId: 4, prodName: "p4", price: 310 },
    { prodId: 5, prodName: "p5", price: 1000 },
]

// lowToHigh
const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price
});
console.log(products);
console.log(lowToHigh);