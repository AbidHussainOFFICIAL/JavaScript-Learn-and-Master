//  Meal Time Notification

var hourNow = 14;

if (hourNow >= 6 && hourNow <= 9) {
    console.log("Breakfast is served.");
} else if (hourNow >= 11 && hourNow <= 13) {
    console.log("Time for lunch.");
} else if (hourNow >= 17 && hourNow <= 20) {
    console.log("It's dinner time.");
} else {
    console.log("Sorry, you'll have to wait, or go get a snack.");
}