// Fancy array
var arr = ["James", "Jill", "Jane", "Jack"];
function fancyArray(symbol, bool) {
    if (bool == true) {
        for (var i = arr.length - 1; i >= 0; i--) {
            console.log(i + " " + symbol + " " + arr[i]);
        }
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            console.log(i + " " + symbol + " " + arr[i]);
        }
    }
}
console.log(fancyArray("=>", true));
