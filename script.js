
// keep scores 

let playerTurn = 1;

let winning = -1;

const gameBoard = [
    [-1, -1, -1], 
    [-1, -1, -1], 
    [-1, -1, -1]
]
// let playerOne = true;


function reset() {
    let resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener('click', () => location.reload()) //click twice add hover effect?
}
    function start(){
        document.appendChild = "gold";
        
        message(document.appendChild + " gets to start");
    }
    
    function message(message){
        document.querySelector("#message").innerText = message;
    }


    function changeColor(element, row, button) {

        if(element.style.background != "") return; //so user can only choose one color throughout

        gameBoard[row][button] = playerTurn; // each btn needs to be id'd

        if(playerTurn == 1){

            element.style.background = "gold";

            document.querySelector("#message").innerText = "blue its ur turn";

            playerTurn = 2;

        }else if (playerTurn == 2) {

            element.style.background = "lightblue";

            document.querySelector("#message").innerText = "gold its ur turn";

            playerTurn = 1;
        }

        //for loop to check win lose conditions
        
    } 

