// Random Chance
function randomChance(){
    var quarters = Math.floor(Math.random() * 50) + 51;
    var result = 0;
    console.log("You start with " + quarters + " quarters");
    while (quarters > 0) {
        result = Math.floor(Math.random() * 100);
        // console.log(result);
        if (result == 1) {
            quarters = quarters + quarters;
            console.log("You won! You have " + quarters + " quarters. Play again.");
            return;
        }
        quarters = quarters - 1;
    }
    console.log("0. Game's Over. All your quarters are spent.");
}
console.log(randomChance());
