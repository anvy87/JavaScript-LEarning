const person = {
    firstName: "Anvesh",
    gender: "Male",
}

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails({ firstName, gender }) {
    console.log(firstName);
    console.log(gender);
}


printDetails(person);


// callback functions
function myFunc(name) {
    console.log('hello world');
    console.log("your name is ${name}");
}

function myFunc2(callback) {
    console.log('hello');
    callback();
}

myFunc2(myFunc);