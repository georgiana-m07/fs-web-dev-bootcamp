//player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg1 = "dice" + randomNumber1 +".png";
var randomImgSrc1 = "images/" + randomDiceImg1;
var dice1 = document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);

//player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomDiceSrc2 = "images/" + randomDiceImg2;
var dice2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceSrc2);

//schimbare titlului in functie de cine castiga
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a draw!";
};