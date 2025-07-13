/*-------------------------------- Constants --------------------------------*/
const letters = document.querySelectorAll(".letter")
const messageElm = document.querySelector('.message')
const word = ['pstwo', 'gumball', 'gta sa', 'nintendo gameboy', 'pokemon', 'tamagotchi']
/*---------------------------- Variables (state) ----------------------------*/

let pickedLetter;
/*------------------------ Cached Element References ------------------------*/
// grab all of your buttons



/*-------------------------------- Functions --------------------------------*/
// handle click function to push the letters to your word array (console.log the event.target.id)
function init (){

}


//letter choice function
letters.forEach((oneLetter)=>{
    oneLetter.addEventListener("click",(event)=>{
        pickedLetter = event.target.id.toLowerCase()
        console.log(pickedLetter)
        showWord(pickedLetter)
    })
})

//show correct letter in the screen 
function showWord (pickedLetter){
    if (pickedLetter){
        messageElm.classList.remove('hidden')
        messageElm.textContent += pickedLetter
    }


}
function checkWord(){
    if (word.includes(oneLetter) && oneLetter === true){
        
    }
}


init()
showWord()
/*----------------------------- Event Listeners -----------------------------*/
// add event listener to all your buttons
document.addEventListener('DOMContentLoaded', init)