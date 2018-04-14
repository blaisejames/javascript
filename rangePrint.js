// Range Print
function printRange(start, end, skip = 1) {
    for (var i = start; i < end; i+=skip) {
        console.log(i);
    }
}
printRange(2, 10, 2);
