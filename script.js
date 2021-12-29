
// keep scores 


// const gameBoard = [null, null, null, null, null, null, null, null, null];
// let playerOne = true;


function reset() {
    let resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener('click', () => location.reload()) //click twice
}
    function start(){
        document.appendChild = "gold";
        
        message(document.appendChild + " gets to start");
    }
    
    function message(message){
        document.querySelector("#message").innerText = message;
    }

    let playerTurn = 1;
    function changeColor(button) {
        if(button.style.background != "") return; //so user can only choose one color throughout
        
        if(playerTurn == 1){
            button.style.background = "gold";
            document.querySelector("#message").innerText = "blue its ur turn";
            playerTurn = 2;
        }else if (playerTurn == 2) {
            button.style.background = "lightblue";
            document.querySelector("#message").innerText = "gold its ur turn";
            playerTurn = 1;
        }
    } 

