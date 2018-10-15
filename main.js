
$(document).ready(initializeApp);

var playerTurn = 1;
var oppositePlayer = 2;

var vectorArray = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
];


function initializeApp() {
    $('.square').click(getClickedSquarePosition)
}

function getClickedSquarePosition(){
    var rowPosition = parseInt($(event.currentTarget).attr("data-row"));
    var colPosition = parseInt($(event.currentTarget).attr("data-col"));
    gameBoardArray[rowPosition][colPosition] = playerTurn;

    var clickedPosition = gameBoardArray[rowPosition][colPosition];

    if (playerTurn === 1) {
        playerTurn = 2;
    } else {
        playerTurn = 1;
    }
    handlePlayerTurn();
    console.log(gameBoardArray);
}

    var gameBoardArray =[];

    for(var xAxis = 0; xAxis < 8; xAxis++){
        gameBoardArray[xAxis] = [];
        for(var yAxis = 0; yAxis < 8; yAxis++){
            gameBoardArray[xAxis][yAxis] = 0;
        }
    }

    gameBoardArray[3][4] = 1;
    gameBoardArray[4][3] = 1;
    gameBoardArray[3][3] = 2;
    gameBoardArray[4][4] = 2;

    console.log(gameBoardArray);


// $(".square").addClass("black")
// $(".square").addClass("white")


                              // [row, col]
function handlePlayerTurn(clickedPositionArray){
    var chipsToFlip = [];
    var squareUnderMe = [0, -1];
    if (occupied === true) {
        return;
    }

    for (var vectorArrayIndex = 0; vectorArrayIndex < vectorArrayIndex.length; vectorArrayIndex++){
        //We need to get the coordinates for our clicked position and ADD it to our vector array coordinates, result will be the difference
        var tempCheckArray = [-1, 0];
        tempCheckArray[0] = clickedPositionArray[0] + vectorArray[0];
        tempCheckArray[1] = clickedPositionArray[1] + vectorArray[1];

        //if the opposite player's piece is there, go into while loop
        if(oppositePlayer){
            while(squareUnderMe === oppositePlayer){
                console.log("opposite player piece is here!")
        }



        //else if it is 0 OR undefined, then return
    }

}

//create for loop to go take in the array information, remove all classes, and then add the class for the current player.
//based on the current player, use if else statement to switch between players
