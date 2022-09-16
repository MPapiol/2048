const play = document.querySelector('.play')
play.addEventListener('click', starGame)
let gameBoard = []
let firstNumber = [2,2,2,2,4]

let rectangles = document.querySelectorAll('.rectangle')
rectangles.forEach((rectangle, i) => {
    gameBoard.push(rectangle)
    gameBoard[i].innerHTML = 0
});

function starGame(){
    generateRandomValue()
    generateRandomValue()
}

function generateRandomValue(){
    let randomValue = Math.floor(Math.random() * gameBoard.length)
    let randomValueForFirstNumber = Math.floor(Math.random() * firstNumber.length)
    gameBoard[randomValue].innerHTML = firstNumber[randomValueForFirstNumber]
    
}

function control(e) {
    if (e.keyCode === 39) {
        keyRight()
    } 
}
document.addEventListener('keyup', control)

