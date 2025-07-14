/*-------------------------------- Constants --------------------------------*/
const letters = document.querySelectorAll(".letter")
const messageElm = document.querySelector('.message')
const wordUnderscores =  document.querySelector("#word-undercores")
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
//      a. add an event listener to each letter
//      b. anytime the letter is pressed console.log() the letter value
//      c. check if the letter they picked is in the displayWord array
//      d. if its not than subtract 1 from the life variable
//      e. if it is than show the letter on the page (This step has sub steps)
// 3. deduct points based on wrong answer


function playGame() {
    pickRandomWord()
    displayedWord = []
    for (let i = 0; i < selectedWord.length; i++) {
        displayedWord.push('_')
    }
    console.log(displayedWord)
    console.log(wordUnderscores)

    for(let i =0; i<displayedWord.length;i++){
        pElement = document.createElement("p")
        pElement.textContent = "_"
        wordUnderscores.appendChild(pElement)
    }
}

//picks random word from word array 
function pickRandomWord() {
    selectedWord = word[Math.floor(Math.random() * word.length)]

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
function showUnderscores() {
    for (i = 0; i < word.length; i++)
        messageElm.classList.remove('hidden')
    word.push('_')
}
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
showUnderscores()
showWord(pickedLetter)
/*----------------------------- Event Listeners -----------------------------*/
// add event listener to all your buttons
document.addEventListener('DOMContentLoaded', init)