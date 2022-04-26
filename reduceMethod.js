const numbers = [1, 2, 3, 4, 5, 8];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum);

//  acc           curntValue         return
//  1              2                  3
//  3              3                   6
//  6              4                   10
//  10             5                   15
//  15             8                   23




const userCart = [
    { prodId: 1, prodName: "mobile", price: 12000 },
    { prodId: 2, prodName: "tv", price: 35000 },
    { prodId: 1, prodName: "laptop", price: 90000 },

]

const totalAmount = userCart.reduce((totalPrice, currentProd) => {
    return totalPrice + currentProd.price;
}, 0)

console.log(totalAmount);

// total price             current Value               return
// 0                        {}                           12000
// 12000                    35000                        47000
// 47000                    90000                        137000