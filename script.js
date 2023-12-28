const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

let scores, currentScore, activePlayer,playing;

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

// const scores = [0,0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;
// let totalScore = 0;
const intit = function(){
    diceEL.classList.add('hidden');
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
     scores = [0,0];
     currentScore = 0;
     activePlayer = 0;
     playing = true;
};
intit();

btnRoll.addEventListener('click',function(){
    if(playing){
    const dice = Math.trunc(Math.random() * 6)+1;
    diceEL.classList.remove('hidden');
    diceEL.src = `images/dice-${dice}.png`;

    if(dice != 1){
        currentScore = currentScore+dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1:0;
      currentScore = 0;
      player0EL.classList.toggle('player--active');
      player1EL.classList.toggle('player--active');
     }
    }
});

btnHold.addEventListener('click' , function(){
    if(playing){
     scores[activePlayer] += currentScore;
     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEL.classList.add('hidden');
    }else{
     document.getElementById(`current--${activePlayer}`).textContent = 0;
     activePlayer = activePlayer === 0 ? 1:0;
     currentScore = 0;
     player0EL.classList.toggle('player--active');
     player1EL.classList.toggle('player--active');
    }
}
});

// btnNew.addEventListener('click', function(){
//      diceEL.classList.add('hidden');
//      score0EL.textContent = 0;
//      score1EL.textContent = 0;
//      current0EL.textContent = 0;
//      current1EL.textContent = 0;
//      player0EL.classList.remove('player--winner');
//      player1EL.classList.remove('player--winner');
//      player0EL.classList.add('player--active');
//      player1EL.classList.remove('player--active');
//      const scores = [0,0];
//      let currentScore = 0;
//      let activePlayer = 0;
//      let playing = true;
// });

btnNew.addEventListener('click', intit);