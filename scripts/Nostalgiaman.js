/*-------------------------------- Constants --------------------------------*/
const letters = document.querySelectorAll(".letter")
const messageElm = document.querySelector('.message')
const word = ['pstwo', 'gumball', 'gta sa', 'nintendo gameboy', 'pokemon', 'tamagotchi']
const maxAttempts = 6
/*---------------------------- Variables (state) ----------------------------*/
let displayedWord = []
let selectedWord = ""
let pickedLetter;
let remainingLives = []
/*------------------------ Cached Element References ------------------------*/
// grab all of your buttons



/*-------------------------------- Functions --------------------------------*/
// handle click function to push the letters to your word array (console.log the event.target.id)
function init() {

}
function handleGuess(letters) {
    if (correctGuess.includes(letter)) {

    }


}
//letter choice function
letters.forEach((oneLetter) => {
    oneLetter.addEventListener("click", (event) => {
        pickedLetter = event.target.id.toLowerCase()
        showWord(pickedLetter)
    })
})

// shows blank spaces for the letters to go into 
displayedWord = []
for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === ' ') {
        displayedWord.push(' ')
    } else {
        displayedWord.push('_')
    }
}

//show correct letter in the screen 
function showWord(pickedLetter) {
    if (pickedLetter) {
        messageElm.classList.remove('hidden')
        messageElm.textContent += pickedLetter
    }
    selectedWord.split('').forEach((letter, idx) => {
        let correctGuess = false
        if (letter === pickedLetter) {
            displayedWord[idx] = pickedLetter
            correctGuess = true

        } //if the guess is correct 
        if (correctGuess) {
            document.querySelector('.word-disp').textContent = displayedWord.join(' ')
            //if not correct..
        } else {
            remainingLives.includes(pickedLetter)
            remainingLives.push(pickedLetters)
        }
    })
}

//to check if the letter isnt in the word - will take a point from available lives 
function decductLife() {

}

function gameOver(letters) {
  
}


init()
showWord(pickedLetter)
/*----------------------------- Event Listeners -----------------------------*/
// add event listener to all your buttons
document.addEventListener('DOMContentLoaded', init)