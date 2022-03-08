const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1";          required output
//     objkey2 : "myvalue2";
// }


// first way

const obj = {
    [key1]: value1,
    [key2]: value2
}

console.log(obj);

// second way

const obj1 = {};

obj1[key1] = value1;
obj1[key2] = value2;
console.log(obj1);