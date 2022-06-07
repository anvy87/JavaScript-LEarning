// compilation  
//    --> early error checking
//    --> determining appropriate scope for variables

// code execution
//      1)Global Execution Context
//          --> creation phase
//          --> code execution phase

// why compilation


// How javascript code executes

// what is global execution context ?
// what is local execution context ?
// closures

console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "Anvesh";
var lastName = "Mishra";
var fullName = firstName + " " + lastName;
console.log(fullName);