const person = {
    name: "Anvesh",
    age: 34,
    "person hobbies": ["guitar", "sleeping"]
}

// for in loop

for (let i in person) {
    console.log('${i} : ${person[i]}');
}