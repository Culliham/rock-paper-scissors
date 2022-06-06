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
            responseString = "Rock";
            break;
        case 2:
            responseString = "Paper";
            break;
        case 3:
            responseString = "Scissors";
            break;
        default:
            responseString = "Computer errer! OOPS!"
    }

//----------RETURN----------
    return responseString;
}

for (let i=0; i<20; i++) {
    testValue = computerPlay();
    console.log(testValue);
}

//----------LOOP UNTIL USER INPUTS VALID RESPONSE----------
let validResponse = false;
while (!validResponse) {

//----------GET USER INPUT AS ONLY LOWER CASE----------
    let playerInput = prompt("Enter: rock, paper, or scissors.").toLowerCase();
    //console.log(playerInput);

    if 


}










