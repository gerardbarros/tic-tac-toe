const container = document.getElementById("gameContainer")
const squareArr = []
let nextMove = "X"

//Check game over state
function gameOver(){

}

//Check if tie
function gameTie(){

}

//Check winner
function checkWinner(){

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

