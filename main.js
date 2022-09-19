//Seleccionar botón play y añadirle evento para empezar juego
const play = document.querySelector('.play')
play.addEventListener('click', starGame)

//Variables del juego

let gameBoard = []
let width = 4
let filteredRow = []
let zeros = []

//Molaria dar un 90% de probabilidad al 2 (Se puede hacer con ?)
let firstNumber = [2, 2, 2, 2, 4]
let rectangles = document.querySelectorAll('.rectangle')
rectangles.forEach((rectangle) => {
    rectangle.innerHTML = 0
    gameBoard.push(rectangle)
    
});

//Función para empezar el juego y generar valor random para colocar el primer numero en el tablero de juego
function starGame() {
    generateRandomValue()
}

//Función que genera el valor random
function generateRandomValue() {
    let randomValue = Math.floor(Math.random() * gameBoard.length)
    let randomValueForFirstNumber = Math.floor(Math.random() * firstNumber.length)

    if (gameBoard[randomValue].innerHTML == 0) {
        gameBoard[randomValue].innerHTML = firstNumber[randomValueForFirstNumber]
    } else generateRandomValue()
}

//Control de teclas
function wichKeyPress(e) {
    if (e.keyCode === 39) {
        keyRight()
    }

    if(e.keyCode === 37){
        keyLeft()
    }
}
document.addEventListener('keyup', control)

function moveRight() {
    for (let i = 0; i < width*width; i++) {
        if (i % 4 === 0) {
            let positionOne = gameBoard[i].innerHTML
            let positionTwo = gameBoard[i + 1].innerHTML
            let positionThree = gameBoard[i + 2].innerHTML
            let positionFour = gameBoard[i + 3].innerHTML
            let row = [parseInt(positionOne), parseInt(positionTwo), parseInt(positionThree), parseInt(positionFour)]

            for (let j = 0; j < width; j++) {
                if (row[j] > 0) {
                    filteredRow.push(row[j])
                }
            }
            let missing = 4 - filteredRow.length

            for(let z = 0; z < missing; z++){
                zeros.push(0)
            }
            let newRow = zeros.concat(filteredRow)
            filteredRow = []
            zeros = []
            gameBoard[i].innerHTML = newRow[0]
            gameBoard[i + 1].innerHTML = newRow[1]
            gameBoard[i + 2].innerHTML = newRow[2]
            gameBoard[i + 3].innerHTML = newRow[3]

        }
    }
}

function moveLeft() {
    for (let i = 0; i < width*width; i++) {
        if (i % 4 === 0) {
            let positionOne = gameBoard[i].innerHTML
            let positionTwo = gameBoard[i + 1].innerHTML
            let positionThree = gameBoard[i + 2].innerHTML
            let positionFour = gameBoard[i + 3].innerHTML
            let row = [parseInt(positionOne), parseInt(positionTwo), parseInt(positionThree), parseInt(positionFour)]

            for (let j = 0; j < width; j++) {
                if (row[j] > 0) {
                    filteredRow.push(row[j])
                }
            }
            let missing = 4 - filteredRow.length

            for(let z = 0; z < missing; z++){
                zeros.push(0)
            }
            zeros = []
            filteredRow = []
            let newRow = filteredRow.concat(zeros)
            gameBoard[i].innerHTML = newRow[0]
            gameBoard[i + 1].innerHTML = newRow[1]
            gameBoard[i + 2].innerHTML = newRow[2]
            gameBoard[i + 3].innerHTML = newRow[3]

        }
    }
}


function combineRow() {
    for (let i = 0; i < 15; i++) {
        if (gameBoard[i].innerHTML === gameBoard[i + 1].innerHTML) {
            let combinedTotal = parseInt(gameBoard[i].innerHTML) + parseInt(gameBoard[i + 1].innerHTML)
            gameBoard[i].innerHTML = combinedTotal
            gameBoard[i + 1].innerHTML = 0
        }
    }
}


function keyRight() {
    moveRight()
    combineRow()
    moveRight()
    generateRandomValue()
}

function keyLeft() {
    moveLeft()
    combineRow()
    moveLeft()
    generateRandomValue()
}