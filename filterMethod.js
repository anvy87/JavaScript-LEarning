const numbers = [1, 2, 3, 5, 7, 8];

const isEven = function(number) {
    return number % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);