const user0 = {
    firstName: "Anvesh",
    lastName: "Mishra",
    email: "anvesh87@gmail.com",
    age: 34,
    address: "HN, PIN",
    about: function() {
        return `${this.firstName} is ${this.age} years old`
    },
    is18: function() {
        return this.age >= 18;
    }
}

console.log(user0.about());

// function  ( that create object)
// 2) add key value pait
// 3) object ko return karega
function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.address = address;
    user.about = function() {
        return `${this.firstName} is ${this.age} years old`
    };
    user.is18 = function() {
        return this.age >= 18;
    };
    return user;
}

const user1 = createUser("anvesh", "mishra", "anvesh87@gmail.com", 34, "my address");
console.log(user1);
const is18 = user1.is18();
console.log(is18);