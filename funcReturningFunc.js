function myFunc() {
    return "a";
}

const ans = myFunc();
console.log(ans)




function myFunc2() {
    function hello() {
        return "hello world"
    }
    return hello;
}
const ans1 = myFunc2();
console.log(ans1());