for (let i = 1; i <= 10; i++) {
     if (i === 4) {
         break;
     }
     console.log(i); // number 4 is not printed
} // bcz of BREAK

for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        continue;
    }
    console.log(i);
}

console.log("Hello!");
