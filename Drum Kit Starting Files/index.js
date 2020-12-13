// // if parantheses was added to the function, like handleClick(), then the function will get executed before the click happens
// // one way to avoid this confusion is to use anonymous functions
// document.querySelector("button").addEventListener('click', handleClick)
// function handleClick() {
// alert('i got clicked')
// }

// import fs from 'fs';

// var soundlist = fs.readdirSync('sounds')
// alert(soundlist);
function keycheck(key){
switch (key) {
    case 'w':
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
    case 'a':
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
    case 's':
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
    case 'd':
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    case 'j':
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
    case 'k':
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
    case 'l':
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    default:
        alert('you\'re not pressing the right key');
        break;
}
}

function buttonAnimation(key) {
    var activeButton = document.querySelector('.'+key);
    activeButton.classList.add('pressed');
    setTimeout(function(){activeButton.classList.remove('pressed')},100)
}


var buttons = document.querySelectorAll('.drum')
for (let index = 0; index < buttons.length; index++) {
// buttons[index].addEventListener('click', function (){var audio = new Audio('sounds/tom-1.mp3');audio.play(); }); //this.style.color='white';})
buttons[index].addEventListener('click', function (){
    keycheck(this.innerHTML)
    buttonAnimation(this.innerHTML)
});

// // now for key presses we add an event listener to the entire page document; since there is no html object or element we can
// // add the event listener to the entire document so that the entire document will listen for key strokes

// // the event listener stores the information about the event in the event object which is passed to the function as shown below
// // look up the MDN documentation for more information
// document.addEventListener('keypress', function(event){
//     keycheck(event.key)
// });

// can also be this way
document.addEventListener('keypress', function(e){
    keycheck(e.key)
    buttonAnimation(e.key)
});

}


