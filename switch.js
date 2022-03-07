// switch statement

let day = 1;

if (day === 0) { // with if else
     console.log("Sunday");
 } else if (day === 1) {
     console.log("Monday");
 } else if (day === 2) {
     console.log("Tuesday");
 } else if (day === 3) {
     console.log("Wednesday");
 } else if (day === 4) {
     console.log("Thursday");
 } else if (day === 5) {
     console.log("Friday");
 } else if (day === 6) {
     console.log("Saturday");
 } else {
     console.log("Invalid Day");
 }

switch (day) {
    case 0:
        console.log("Sunday");
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
    default:
        console.log("Invalid day")
}
