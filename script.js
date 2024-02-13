//  Javascript File For Guess the Number.


let randomNumber = Math.round(Math.random() * 100 + 1)
//    console.log(rand);

const submit = document.querySelector('#subt')

const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })

}

function validateGuess(guess) {
    // validtae the guessess (value lies in 1-100)
    if (isNaN(guess)) {
        alert('Please Enter Valid a Number')

    } else if (guess < 1) {
        alert('Please Enter  Number Greater than 1')
    } else if (guess > 100) {
        alert('Please Enter Number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over..   Random Number was: ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }


}
function checkGuess(guess) {
    // give Message (based on value is coorectly guessed or not)
    if (guess === randomNumber) {
        displayMessage(`Congrats, Your Guess is Correct  : ${randomNumber}`)
        endGame()

    } else if (guess < randomNumber) {
        displayMessage(`Your Number is Too Low `)

    } else if (guess > randomNumber) {
        displayMessage(`Your Number is Too high `)

    }

}

function displayGuess(guess) {
    // clean the value and update number of turn left
    userInput.value = ""
    guessSlot.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message) {
    // dom manipulation
    lowOrHi.innerHTML = `<h3> ${message} </h3>`


}

function endGame() {
    // end the Game
    userInput.value = ""
    userInput.setAttribute('disabled', '')
    submit.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h3 id="newGame"> Start New Game </h3>`
    startOver.appendChild(p)
    playGame = false
    newGame()

}

function newGame() {
    // start new game
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNumber = Math.round(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true

    })
}
