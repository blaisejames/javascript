function time(HOUR, MINUTE, PERIOD) {
    var dayPart = "";
    var hourPart = "";

    if (MINUTE < 30) {
        hourPart = "It's just after " + HOUR;
    }
    if (MINUTE > 30){
        hourPart = "It's almost " + (HOUR+1);
    }
    if (MINUTE == 0) {
        hourPart = "It's exactly " + HOUR;
    }
    if (MINUTE == 30) {
        hourPart = "It's exactly " + HOUR + ":30";
    }
    if (PERIOD == "AM") {
        dayPart = " in the morning";
    }
    else {
        dayPart = " in the evening";
    }
    console.log(hourPart + dayPart);
}
console.log(time(8, 50, "AM"));
