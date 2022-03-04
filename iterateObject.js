const person = {
    name: "Anvesh",
    age: 34,
    "person hobbies": ["guitar", "sleeping"]
}

// for in loop

for (let i in person) {
    console.log('${i} : ${person[i]}');
}

for (let _key in person) {
    // console.log('${_key} : ${person[_key]}');
    console.log(_key, person[_key]);
}

// object.keys

console.log(Object.keys(person));

for (let key of Object.keys(person)) {
    console.log(person[key]);
}
