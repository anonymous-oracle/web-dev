var player1, player2;

player1 = Math.floor((Math.random() * 6) + 1)
player2 = Math.floor((Math.random() * 6) + 1)

var heading = document.querySelector('h1')
var img1 = document.querySelector('.dice1')
var img2 = document.querySelector('.dice2')
img1.setAttribute('src','images/dice'+player1+'.png')
img2.setAttribute('src','images/dice'+player2+'.png')


if (player1 > player2) {
    heading.textContent='Player 1 Wins!!'

} else if(player2 > player1){
    heading.textContent='Player 2 Wins!!'

}
else{
    heading.textContent='Player 2 Wins!!'
    }
setTimeout(function(h){h.textContent='Refresh Me'}, 1500, heading)
