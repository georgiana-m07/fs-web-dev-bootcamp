function sunet() {
    var textButton = this.innerHTML;
    tasta(textButton);
    animatie(textButton);
}

for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", sunet);
}

document.addEventListener("keydown", function(event) {
    tasta(event.key);
    animatie(event.key);
})

function tasta(key) {
    switch (key) {
        case "w":
            var sunetW = new Audio("sounds/crash.mp3");
            sunetW.play();
            break;
        case "a":
            var sunetA = new Audio("sounds/kick-bass.mp3");
            sunetA.play();
            break;
        case "s":
            var sunetS = new Audio("sounds/snare.mp3");
            sunetS.play();
            break;
        case "d":
            var sunetD = new Audio("sounds/tom-1.mp3");
            sunetD.play();
            break;
        case "j":
            var sunetJ = new Audio("sounds/tom-2.mp3");
            sunetJ.play();
            break;
        case "k":
            var sunetK = new Audio("sounds/tom-3.mp3");
            sunetK.play();
            break;
        case "l":
            var sunetL = new Audio("sounds/tom-4.mp3");
            sunetL.play();
            break;
        default:
            console.log("Button not working!");
    }
}

function animatie(currentKey) {
    var acttiveButton = document.querySelector("." + currentKey);
    acttiveButton.classList.add("pressed");
    setTimeout(function() {
        acttiveButton.classList.remove("pressed");
    }, 100);
}