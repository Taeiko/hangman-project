/*-------------------------------- Constants --------------------------------*/
const letters = document.querySelectorAll(".letter")
const messageElm = document.querySelector('.message')
const wordUnderscores = document.querySelector("#word-undercores")
const livesElement = document.querySelector(".lives")
const gameOverContainer = document.querySelector("#game-over")
const gameWinCont = document.querySelector("#game-win")
const word = ['pstwo', 'gumball', 'sanandreas', 'gameboy', 'pokemon', 'tamagotchi']
/*---------------------------- Variables (state) ----------------------------*/
let displayedWord = []
let selectedWord = ""
let pickedLetter;
let wrongLetter = []
let lives = 6
/*------------------------ Cached Element References ------------------------*/
// grab all of your buttons



/*-------------------------------- Functions --------------------------------*/
// handle click function to push the letters to your word array (console.log the event.target.id)
function init() {
    pickRandomWord()
    playGame()
    console.log(selectedWord)
}





function playGame() {
    pickRandomWord()
    displayedWord = []
    for (let i = 0; i < selectedWord.length; i++) {
        displayedWord.push('_')
        pElement = document.createElement("p")
        pElement.textContent = "_"
        wordUnderscores.appendChild(pElement)
    }
    console.log(displayedWord)
    console.log(wordUnderscores)
    livesElement.textContent = lives
}


//picks random word from word array 
function pickRandomWord() {
    selectedWord = word[Math.floor(Math.random() * word.length)]
}


//letter choice 
//this only shows corrct guesses 
letters.forEach((oneLetter) => {
    oneLetter.addEventListener("click", (event) => {
        pickedLetter = event.target.id.toLowerCase()
        if (selectedWord.includes(pickedLetter)) {
            showWord(pickedLetter)
        } else {lifePoints()}
    })
})

// shows blank spaces for the letters to go into 
function showUnderscores() {
    for (i = 0; i < word.length; i++)
        messageElm.classList.remove('hidden')
    word.push('_')

    pElement = document.createElement("p")
    pElement.textContent = "_"
    wordUnderscores.appendChild(pElement)
    console.log(pElement)
}



//show correct letter in the screen 
//show correct letter in the screen 
function showWord(pickedLetter) {
    wordUnderscores.innerHTML = ""
    selectedWord.split('').forEach((letter, idx) => {


        if (letter === pickedLetter) {
            displayedWord[idx] = letter

        }


    });
    displayedWord.forEach((element) => {
        let pElement = document.createElement("p")
        pElement.textContent = element
        wordUnderscores.appendChild(pElement)

    })


    console.log(displayedWord)
    GameWin()
}



//to check if the letter isnt in the word - will take a point from available lives 
function lifePoints() {
    lives-=1
    console.log(lives)

    livesElement.textContent = `Reamining lives ${lives}`

    gameOver()
} 

function gameOver() {
if (lives == 0){
    console.log("Game Over")
    let gameOverText = document.createElement('p')
    gameOverText.textContent = 'Game over!'
    gameOverContainer.appendChild(gameOverText)

}
}

function GameWin (noUnderscores){
    // loop through the entire displayWords
    let noDashes = true


    let hasWon = displayedWord.every((element)=>{
        return element !== "_"
    })

    

    if(hasWon){
        console.log("YOU WIN")
        let gameWinText = document.createElement('p')
        gameWinText.textContent = "You won!"
        gameWinCont.appendChild(gameWinText)
    }


}
/*----------------------------- Event Listeners -----------------------------*/
// add event listener to all your buttons
document.addEventListener('DOMContentLoaded', init)






// if the lives hit 0 instead of console.log show the game over on the page
// winning and losing
