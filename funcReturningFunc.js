function myFunc() {
    return "a";
}

const ans = myFunc();
console.log(ans)



function myFunc2() {
    function hello() {
        console.log("hello world")
    }
    return hello;
}
const ans = myFunc2();
ans();