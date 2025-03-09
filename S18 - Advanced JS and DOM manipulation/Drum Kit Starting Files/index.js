function sunetClick() {
    
    //detecteaza cand a fost apasat butonul
    var textButton = this.innerHTML;
    tastaClick(textButton);
    buttonAnimation(textButton);
} 

for (var btn = 0; btn < document.querySelectorAll(".drum").length; btn ++) {
    document.querySelectorAll(".drum")[btn].addEventListener("click", sunetClick);
}

//detecteaza cand a fost apasata tasta
document.addEventListener("keydown", function(event) {
    tastaClick(event.key);
    buttonAnimation(event.key);
})

function tastaClick(key) {
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

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}