//
let playerTurn = 1;

let winning = -1;

let clickCounter = 0;

const gameBoard = [

    [-1, -1, -1],
    [-1, -1, -1], 
    [-1, -1, -1]
]



function reset() {

    let resetBtn = document.querySelector("#reset");

    resetBtn.addEventListener('click', () => location.reload())
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
        
        if(winning != -1) return; 

        clickCounter++;

        gameBoard[row][button] = playerTurn; //gameboard row column

        if(playerTurn == 1){

            element.style.background = "gold";

            document.querySelector("#message").innerText = "blue (player 2) its ur turn";

            playerTurn = 2;

        }else if (playerTurn == 2) {

            element.style.background = "lightblue";

            document.querySelector("#message").innerText = "gold (player 1) its ur turn";

            playerTurn = 1;
        }

        //for loop to check win lose conditions
        for(let i = 0; i < 3; i++) {
            //row check
            if(gameBoard[i][0] == gameBoard[i][1] && gameBoard[i][1] == gameBoard[i][2]) winning = gameBoard[i][0]; 


            //column check
            if(gameBoard[0][i] == gameBoard[1][i] && gameBoard[1][i] == gameBoard[2][i]) winning = gameBoard[0][i];
            
        }

        //diagonal check
        if(gameBoard[0][0] == gameBoard[1][1] == gameBoard[2][2]) winning = gameBoard[1][1]; //048 p1
        

        if(gameBoard[0][2] == gameBoard[1][1] == gameBoard[2][0]) winning = gameBoard[1][1]; //246 p2

        
        }
            if(winning != -1){
            document.querySelector("#message").innerText = "player " + winning + " wins!";
        }

            if(clickCounter == 9 && winning == -1){

            document.querySelector("#message").innerText = "DRAW";
        }
    

    
