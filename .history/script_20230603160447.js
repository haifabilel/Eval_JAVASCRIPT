// Players
const playerOne = document.getElementById('player_0');
const playerTow = document.getElementById('player_1');
// Scores
const score0 = document.getElementById('score_0');
const score1 = document.getElementById('score_1');
// Dice
const dice = document.querySelector('.dice');
// Buttons
const buttonRoll = document.querySelector('.btn_roll');
const buttonHold = document.querySelector('.btn_hold');
const buttonNewGame = document.querySelector('.btn_newGame');
// Current
const current0 = document.getElementById('current_0');
const current1 = document.getElementById('current_1');

score0.textContent = 0 ;
score1.textContent = 0 ;
dice.classList.add("hidden");

let scores = [0 , 0];
let activePlayer = 0 ;
let currentScore = 0 ;

const switchPlayer = function(){
    document.getElementById(`current_${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0 ;
    currentScore = 0;
    playerOne.classList.toggle("player_active");
    playerTow.classList.toggle("player_active");


}
// ButtonRoll
buttonRoll.addEventListener("click", function() {
    dice.classList.remove("hidden");

    //Generate number 1 to 6
    const diceRandom = Math.floor

})