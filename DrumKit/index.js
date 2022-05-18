// alert("Hello");

/* 
function handleClick() {
    alert("i got clicked!");
}


for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    // buttons = document.querySelectorAll("button")[i];  // [0] first element, [1] second element
    // buttons.addEventListener("click", handleClick);

    // or
    button = buttons = document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
*/


// Or we can write

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // var audio = new Audio("sounds/crash.mp3");
        // audio.play();
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
    // console.log(event.key);
    // alert("You pressed a Key on the KeyBoard");
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
};



function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}
