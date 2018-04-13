// For a Few Billion
var dayValue = 0.1;
for (var i = 2; i <= 30; i++) {
    dayValue = dayValue + dayValue;
    console.log(dayValue);
}
console.log("After 30 days, the servant would have a reward of $" + dayValue);
