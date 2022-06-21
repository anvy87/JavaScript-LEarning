// lexical environment, scope chain

const lastName = "Mishra";

const printName = function() {
    const firstName = "Anvesh";

    function myFunction() {
        console.log(firstName);
        console.log(lastName);
    }
    myFunction()
}

printName()