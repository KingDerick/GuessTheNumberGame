import { DisplayMessage } from "./Displaymessage.js";
import { UpdateHighScore, GetHighScore } from "./HighScores.js";

let seecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.getElementsByClassName('number').textContent = seecretNumber;

document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value;

    console.log(seecretNumber);

    if(!guess) {

        DisplayMessage('Invalid Number!🚨')

    }else if (guess == seecretNumber) {

        document.querySelector('.number').textContent = seecretNumber;
        document.querySelector('body').style.backgroundColor = 'rgb(9,93,3)';
        DisplayMessage('You guessed right!🎊')

        UpdateHighScore(score);
        document.querySelector('.highscore').textContent = GetHighScore();

    } else if (guess !== seecretNumber) {
        if (score > 1) {
            DisplayMessage(guess > seecretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            DisplayMessage('💥 You lost the game!!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    seecretNumber = Math.trunc(Math.random() * 20) + 1;

    DisplayMessage('Start guessing ...')

    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = 'rgb(69, 68, 68)';
});
