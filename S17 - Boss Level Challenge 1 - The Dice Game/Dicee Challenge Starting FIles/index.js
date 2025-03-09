//schimbare poza player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSrc1 = "images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc1);

//schimbare poza player 2
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSrc2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

//schimbare titlu in functie de castigator
if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML ="Player 1 Wins!!!";
} else  if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML ="player 2 wins!!!";
} else  if (randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML ="It's a DRAW!!!";
}