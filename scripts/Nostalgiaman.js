/*-------------------------------- Constants --------------------------------*/
const letters = document.querySelectorAll(".letter")
const messageElm = document.querySelector('.message')
const word = ['pstwo', 'gumball', 'gta sa', 'nintendo gameboy', 'pokemon', 'tamagotchi']
const maxAttempts = 6
/*---------------------------- Variables (state) ----------------------------*/
let displayedWord = []
let selectedWord = ""
let pickedLetter;
let wrongLetter = []
/*------------------------ Cached Element References ------------------------*/
// grab all of your buttons



/*-------------------------------- Functions --------------------------------*/
// handle click function to push the letters to your word array (console.log the event.target.id)
function init() {
    currentWord = word[0]
}


// Play game function
// Pick the word to play with from words array
// Add underscores to displayedWord besed on the length of chosen word
// Display the displayed word array in the messageElem



// 1. display the _ on the page
// 2. when the user clicks a letter check if the letter is in the word (if statement)
// 3. deduct points based on wrong answer


function playGame() {
    pickRandomWord()
    displayedWord = []
    for (let i = 0; i < selectedWord.length; i++) {
        displayedWord.push('_')
    }
    console.log(displayedWord)
}

//picks random word from word array 
function pickRandomWord() {
    selectedWord = word[ Math.floor(Math.random()* word.length)]
    console.log(typeof selectedWord)

}
//letter choice 
letters.forEach((oneLetter) => {
    oneLetter.addEventListener("click", (event) => {
        pickedLetter = event.target.id.toLowerCase()
        if (currentWord.includes(pickedLetter)) {
            showWord(pickedLetter)
        }
    })

})

// shows blank spaces for the letters to go into 

//show correct letter in the screen 
function showWord(pickedLetter) {
    if (pickedLetter) {
        messageElm.classList.remove('hidden')
        messageElm.textContent += pickedLetter
    } selectedWord.split('').forEach((letter, idx) => {
        let correctGuess = false
        if (letter === pickedLetter) {
            displayedWord[idx] = pickedLetter
            correctGuess = true
        }
    })
}
//to check if the letter isnt in the word - will take a point from available lives 
function decductLife() {

}

function gameOver() {

}
playGame()

showWord(pickedLetter)
/*----------------------------- Event Listeners -----------------------------*/
// add event listener to all your buttons
document.addEventListener('DOMContentLoaded', init)