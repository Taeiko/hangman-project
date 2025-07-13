/*-------------------------------- Constants --------------------------------*/
const letters = document.querySelectorAll(".letter")
const messageElm = document.querySelector('.message')
const word = ['ps2']
/*---------------------------- Variables (state) ----------------------------*/


/*------------------------ Cached Element References ------------------------*/
// grab all of your buttons



/*-------------------------------- Functions --------------------------------*/
// handle click function to push the letters to your word array (console.log the event.target.id)
function init (){

}


//word check function 
letters.forEach((oneLetter)=>{
    oneLetter.addEventListener("click",(event)=>{
        const pickedLetter = event.target.id.toLowerCase()
        const splitWord = word[0].split("")
        console.log(pickedLetter)
        showWord(pickedLetter)
        console.log(splitWord)
        console.log(splitWord.includes(pickedLetter))
    })
})


function showWord (pickedLetter){
    console.log('Inside show word')
    if (pickedLetter){
        console.log('if statement')
        messageElm.classList.remove('hidden')
        messageElm.textContent = pickedLetter
    }

}
init()
showWord()
/*----------------------------- Event Listeners -----------------------------*/
// add event listener to all your buttons
document.addEventListener('DOMContentLoaded', init)