//fetch Players
const playerOne = document.getElementById('player_0');
const playerTow = document.getElementById('player_1');
//fetch Score
const score0 = document.getElementById('score_0');
const score1 = document.getElementById('score_1');
//fetch Dice
const dice = document.querySelector('.dice');
//fetch buttons
const buttonRoll = document.querySelector('.btn_roll');
const buttonHold = document.querySelector('.btn_hold');
const buttonNewGame = document.querySelector('.btn_newGame');
//fetch Current
const current0 = document.getElementById('current_0');
const current1 = document.getElementById('current_1');

score0.textContent = 0 ;
score1.textContent = 0 ;


let scores = [0 , 0]
let activePlayer = 0 ;
let currentScore = 0 ;
// SwitchPlayer function
const switchPlayer = () => {
    document.getElementById(`current_${activePlayer}`).textContent = 0;
    document.querySelector(`.player_${activePlayer}`).classList.remove('player_winn1');
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    playerOne.classList.toggle("player_active");
    playerTow.classList.toggle("player_active"); 

}
//buttonRoll
buttonRoll.addEventListener("click", () => {
    dice.classList.remove("hidden");
    
//Generate number 1 to 6
    const diceRandom = Math.floor(Math.random() * 6) + 1;
    dice.src =`/asset/dice${diceRandom}.png`

//   Sound game
const audio = new Audio('/asset/programmation-web_de-2_asset_son.mp3');

const lanseSon = function() {
    audio.play()
}
audio.addEventListener('canplaythrough', lanseSon);

//Rolled
if(diceRandom !==1){
    currentScore += diceRandom;
    document.getElementById(`current_${activePlayer}`).textContent = currentScore;
    document.querySelector(`.player_${activePlayer}`).classList.add('player_winn1');

}else{
    //Switch Player
    switchPlayer();
}
});
//ButtonHold
buttonHold.addEventListener('click',function(){
    scores[activePlayer] += currentScore;
    document.querySelector(`.player_${activePlayer}`).classList.remove('player_winn1');
    document.getElementById(`score_${activePlayer}`).textContent = scores[activePlayer];
    
   
    
if(scores[activePlayer] >=100){
     document.querySelector(`.player_${activePlayer}`).classList.add('player_winn');
     const audio = new Audio('/asset/tadaa-47995.mp3');

     const lanseSon1 = function() {
     audio.play()
    }
     audio.addEventListener('canplaythrough', lanseSon1);
        
    }
    else{
        switchPlayer();
    }
});

//  Button NewGame
buttonNewGame.addEventListener ('click',function(){
    document.location.reload();
 }) 
