//  Time-Based Greeting

var time = 1900; // Example input

if (time >= 0 && time < 1200) {
    console.log("Good Morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
} else if (time >= 1700 && time <= 2100) {
    console.log("Good Evening");
} else {
    console.log("Good Night");
}