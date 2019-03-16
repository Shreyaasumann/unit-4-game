let yourWins = 0;
let yourLosses = 0;
let yourTotalScore = 0;
let blue = 0;
let yellow = 0;
let green = 0;
let pink = 0;
let computerNum = 0;

$(document).ready(function() {
    console.log("DOM fully loaded and parsed");
    // displaying initial score of 0
    $("#score").html(yourTotalScore);


    var imageArray = [
        "assets/images/blue.crystal.png",
        "assets/images/green.crystal (1).jpeg",
        "assets/images/yellow.crystal.jpeg",
        "assets/images/pink.crystal.jpeg",
    ]

    function createCrystals(){
        $("#crystals").empty()
        for(var i = 0; i < imageArray.length; i++){
            var newImg = $("<img>")
            newImg.attr("src", imageArray[i])
            newImg.attr("class", "button")
            newImg.attr("data-number", Math.floor(Math.random() * 25))
            $("#crystals").append(newImg)
        }
    }

    createCrystals()

    const generateRandomNum = function() {
        let random = Math.floor(Math.random() * 100 + 19);
        computerNum += random;
        return random;
    }

    // Generating random number to match
    $("#randomNum").html(generateRandomNum());

    const generateCrystalNum = function() {
        let random = Math.floor(Math.random() * 12) + 1;
        return random;
    }

    //Generating random numbers for each crystal and assigning their values to declared variables above
    const initialCrystalNum = function() {

        blue += generateCrystalNum();
        pink += generateCrystalNum();
        green += generateCrystalNum();
        yellow += generateCrystalNum();
    }

    initialCrystalNum();

    //assigning value of button clicked to correct crystal.
    $(document).on("click", ".button", function() {
        alert($(this).data("number"))
    });

    const winOrLose = function() {
        if(yourTotalScore === computerNum) {
            yourWin += 1;
            $("#win").html(yourWins);
            alert("You win!");
            reset();
        } else if(yourTotalScore > computerNum) {
            yourLosses += 1;
            $("#loss").html(yourLosses);
            alert("You lose.");
            reset();
        }
    }

    // resets all values back to 0 for user to play again.
    const reset = function() {

        targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#targetNumber").text(targetNumber);
        createCrystals()
        yourTotalScore = 0;
        $("#score").html(yourTotalScore);
        blue = 0;
        green = 0;
        pink = 0;
        yellow = 0;
        computerNum = 0;
        initialCrystalNum();
        $("#randomNum").html(computerNum += generateRandomNum());
    }

    $("#reset").on("click", reset)
});