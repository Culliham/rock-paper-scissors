//----------COMMENTS----------


function randomNumberFromRange (lower, upper) {
    return (Math.random() * (upper-lower)   +lower); 
}

function computerPlay() {

//----------RANDOM NUMBER: 1, 2, or 3----------
    let responseInteger = Math.floor(randomNumberFromRange(1, 4));
    let responseString;

//----------ENUMERATE ROCK PAPER SCISSORS----------
    switch(responseInteger) {
        case 1:
            responseString = "rock";
            break;
        case 2:
            responseString = "paper";
            break;
        case 3:
            responseString = "scissors";
            break;
        default:
            console.log("Error in computerPlay()");
            responseString = "Computer errer! OOPS!";
    }

//----------RETURN----------
    return responseString;
}

//----------TESTING COMPUTER PLAY----------
/*for (let i=0; i<20; i++) {
    testValue = computerPlay();
    console.log(testValue);
}*/


//----------Compare two users, return who won----------
function evaluateRPS(playerOne, playerTwo) {


//----------Return variables----------
    let playerOneWin=false;
    let playerTwoWin=false;

//----------RPS logic.----------
    switch (playerOne) {
        case "rock":
            playerOneWin=(playerTwo=="scissors");
            playerTwoWin=(playerTwo=="paper");
            break;
        case "paper":
            playerOneWin=(playerTwo=="rock");
            playerTwoWin=(playerTwo=="scissors");
            break;
        case "scissors":
            playerOneWin=(playerTwo=="paper");
            playerTwoWin=(playerTwo=="rock");
            break;
    }

//----------Return who won----------
    return {playerOneWin, playerTwoWin};
}

let computerWins=0;
let playerWins=0;

function RPSvsComp () {
//----------LOOP UNTIL USER INPUTS VALID RESPONSE----------
    let validResponse=false;
    let playerInput;
    while (!validResponse) {

//----------GET USER INPUT AS ONLY LOWER CASE----------
        playerInput = prompt("Enter: rock, paper, or scissors.").toLowerCase();
        //console.log(playerInput);
        playerInput.toLowerCase;
        console.log(`Player entered: ${playerInput}`);
        
        let validResponsesList = ["rock", "paper", "scissors"];
        validResponse=validResponsesList.includes(playerInput)
        
        if (!validResponse) {alert("Bad input! Rock, paper, scissors.");}
    }
    

//----------PLAY COMPUTER----------
    let compInput=computerPlay();
    console.log(`Computer played: ${compInput}`);


//----------SEE WHO WON----------
    let winner=evaluateRPS(playerInput, compInput);
    let outputLog="";

    if (winner.playerOneWin) {
        validResponse=true;
        outputLog=outputLog.concat("You win! ", playerInput, " beats ", compInput);
        playerWins++;
    } else if (winner.playerTwoWin) {
        validResponse=true;
        outputLog=outputLog.concat("You lose! ", compInput, " beats ", playerInput);
        computerWins++;
    } else {
        outputLog=outputLog.concat("Draw! ", compInput, " vs ", playerInput);        
    }
    alert(outputLog);
    console.log(outputLog);
}

for (let i=0; i<5; i++) {
    RPSvsComp();
}

if (playerWins>computerWins) {
    alert("Player wins best of 5!");
} else if (playerWins<computerWins) {
    alert("Player loses best of 5!");
} else {
    alert("Best of 5 is a draw!");
}










