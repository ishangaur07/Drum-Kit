// document.querySelector("button").addEventListener("click",handleClick);
var numberOfDrum = document.querySelectorAll(".drum").length;

for (let index =0; index < numberOfDrum; index++){

    document.querySelectorAll("button")[index].addEventListener("click",function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
}



addEventListener("keypress", function(event){
    makeSound(event.key);
    animation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "a":
            var audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
        break;

        case "s":
            var audio2 = new Audio("sounds/tom-3.mp3");
            audio2.play();
        break;
        
        case "d":
            var audio3 = new Audio("sounds/tom-4.mp3");
            audio3.play();
        break;
        case "j":
            var audio4 = new Audio("sounds/snare.mp3");
            audio4.play();
        break;
        case "k":
            var audio5 = new Audio("sounds/kick-bass.mp3");
            audio5.play();
        break;
        case "l":
            var audio6 = new Audio("sounds/crash.mp3");
            audio6.play();
        break;
        default: console.log(buttonInnerHTML);
    }
}

function animation(key){
     var activeButton = document.querySelector("." + key);
       activeButton.classList.add("pressed");
       setTimeout(function(){
        activeButton.classList.remove("pressed");
       }, 100);
}