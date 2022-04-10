// bock scope vs function scope

// let and const are block scope
// // var is function scope

// {
//     let firstName = "Anvesh";
//     console.log(firstName);
// }

// {
//     let firstName = "Apurva";
//     console.log(firstName);
// }

function myApp() {
    if (true) {
        let firstName = "Anvesh";
        console.log(firstName);
    }
    console.log(FirstName);
}

myApp();