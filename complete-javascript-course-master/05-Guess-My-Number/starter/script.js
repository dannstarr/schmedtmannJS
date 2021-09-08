'use strict';

let number = Math.trunc(Math.random() * 20 + 1)
let score = 20
let highScore = 0
let winningScore

const displayMessage = function(message) {
    document.querySelector(`.message`).textContent = message
}



document.querySelector(`.check`).addEventListener(`click`, function(){
    const guess = Number(document.querySelector(`.guess`).value)

    if (!guess) {
        displayMessage(`⛔️ No number entered`) 
        score--
        document.querySelector(`.score`).textContent = score
    }else if (guess === number) {
        document.querySelector(`.number`).textContent = guess
        displayMessage(`🏆 Yeah!!! you got it right. Winner!! 🏆`) 
        document.querySelector(`body`).style.backgroundColor = `#60b347`
        document.querySelector(`.number`).style.width = `30rem`
        winningScore = score
        if (winningScore > highScore) {
            highScore = winningScore
            document.querySelector('.highscore').textContent = highScore
        }

            //WHEN GUESS IS WRONG    
    }else if (guess !== number) {
        displayMessage(guess > number ? `📈 Too high, try a little lower` : `📉 Too low, try a little higher`) 
        score --
        document.querySelector(`.score`).textContent = score
    } 
})

//WHEN AGAIN BUTTON IS PRESSED

document.querySelector(`.again`).addEventListener(`click`, function() {
    number = Math.trunc(Math.random() * 20 + 1)
    document.querySelector(`.guess`).value = ''
    score = 20
    document.querySelector(`.score`).textContent = score
    document.querySelector(`body`).style.backgroundColor = `#222`
    displayMessage(`Guess a number`) 
    document.querySelector(`.number`).style.width = `15rem`
    document.querySelector(`.number`).textContent = '?'
})