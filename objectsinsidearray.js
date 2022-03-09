// very useful in real world applications

const users = [
        { userId: 1, firstName: "anvesh", gender: "male" },
        { userId: 2, firstName: "apurva", gender: "female" },
    ]
    // console.log(users);

for (let user of users) {
    // console.log(user);
    // console.log(user.userId);
    // console.log(user.firstName);
}

// nested destructuring

const [user1, user2] = users;
console.log(user1);