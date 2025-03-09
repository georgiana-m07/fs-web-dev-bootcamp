//variabilele globale folosite
var buttonColors = ["green", "red", "yellow", "blue"];
var level = 0;
var gamePattern = [];
var userPattern = [];
var started = false;

//inregistrare cand palyer-ul apasa un buton
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userPattern.push(userChosenColor);
    playSound(userChosenColor);
    animation(userChosenColor);
    checkAnswer(userPattern.length-1);
})

//functie pentru a face un sunet
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//functie care sa inregistreze urmatoarea secventa in joc
function nextSequence() {
    userPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}

//inregistrea apasarii unei taste
$(document).keydown(function() {
    if(!started) {
        nextSequence();
        $("#level-title").text("Level " + level);
        started = true;
    }
})

//functie care animeaza apasarea unui buton
function animation(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


//functie pentru verificarea raspunsului daca merge cu pattern-ul jocului
function checkAnswer(pattern) {
    if(gamePattern[pattern] === userPattern[pattern]) {
        if(gamePattern.length === userPattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }

    } else {
        $("#level-title").text("Game Over! Press any key to restart the game.");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 1000);
        restart();

    }
}

//functie pentru a da restart la joc
function restart() {
    gamePattern = [];
    level = 0;
    started = false;
}