const container = document.getElementById("gameContainer")
const squareArr = []
let nextMove = "X"

//Check game over state
function gameOver(message){
    document.getElementById("winner").innerHTML = message
    container.style.display = "none"
    document.getElementById("gameOver").style.display = "block"
}

//Check if tie
function gameTie(){
    let shouldReturn = true
    squareArr.forEach( ({state}) =>{
        if(state == "") shouldReturn = false
    })
    return shouldReturn

}

//Check winner
function checkWinner(){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i]
        if(    
            squareArr[a].state !== "" && 
            squareArr[a].state === squareArr[b].state &&
            squareArr[a].state === squareArr[c].state
        ){
            return true
        }
    }
    return false
}


class MakeSquares{
    constructor(element, index){
        this.element = element
        this.index = index
        this.state = ""
    }
    clicked(){
        this.state = nextMove
        this.element.classList.remove("notClicked")
        this.element.onclick = function(){
            return false
        }
        this.element.querySelector("p").innerHTML = this.state
        if(checkWinner()) return gameOver(this.state + " wins")
        if(gameTie()) return gameOver("Scratch")
        nextMove == "X" ? (nextMove = "O") : (nextMove = "X")
    }
}

for (let index = 0; index < 9; index++){
    const div = document.createElement("div")
    div.classList.add("square", "notClicked")
    const square = new MakeSquares(div, index)
    div.onclick = function (){
        square.clicked()
    }
    div.appendChild(document.createElement("p"))
    container.appendChild(div)
    squareArr.push(square)
}

