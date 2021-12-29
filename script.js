
// keep scores 

let playerTurn = 1;

let winning = -1;

let clickCounter = 0;

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
        
        if(winning != -1) return; //to stop

        clickCounter++;

        gameBoard[row][button] = playerTurn; // each btn needs to be id'd

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
            if(gameBoard[i][0] == gameBoard[i][1] && gameBoard[i][1] == gameBoard[i][2]) winning = gameBoard[i][0]; //player 2?
            // if(gameBoard[i][3] == gameBoard[i][4] && gameBoard[i][4] == gameBoard[i][5]) winning = gameBoard[i][0];//me
            // if(gameBoard[i][6] == gameBoard[i][7] && gameBoard[i][7] == gameBoard[i][8]) winning = gameBoard[i][0];//me
            //if(gameBoard[i][0] == gameBoard[i][1] && gameBoard[i][1] == gameBoard[i][2]) winning = gameBoard[i][1]; //player 1?


            //column check
            if(gameBoard[0][i] == gameBoard[1][i] && gameBoard[1][i] == gameBoard[2][i]) winning = gameBoard[0][i];
            // if(gameBoard[0][i] == gameBoard[3][i] && gameBoard[3][i] == gameBoard[6][i]) winning = gameBoard[i][0];//me
        }

        //diagonal check
        if(gameBoard[0][0] == gameBoard[1][1] == gameBoard[2][2]) winning = gameBoard[1][1]; //048 only g wrks,

        if(gameBoard[0][2] == gameBoard[1][1] == gameBoard[2][1]) winning = gameBoard[1][1]; //246 only blue works, 11 b?

        //if(gameBoard[0][0] == gameBoard[1][1] == gameBoard[2][2]) winning = gameBoard[1][0]; //048 blue?

        if(winning != -1){
            document.querySelector("#message").innerText = "player " + winning + " wins!";
        }

        if(clickCounter == 9 && winning == -1){

            document.querySelector("#message").innerText = "DRAW";
        }
    } 

