
$(document).ready(initializeApp);

var playerTurn = 1;

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
    $('.square').click(getClickedSquarePosition);
}

function getClickedSquarePosition() {

    var rowPosition = parseInt($(event.currentTarget).attr("data-row"));
    var colPosition = parseInt($(event.currentTarget).attr("data-col"));

    gameBoardArray[rowPosition][colPosition] = playerTurn;

    if (playerTurn === 1) {
        playerTurn = 2;
    } else {
        playerTurn = 1;
    }

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

//                               [row, col]
// function handlePlayerTurn(clickedPositionArray){
//     if (occupied === true) {
//         return;
//     }
//     for (var directionArrayIndex = 0; directionArrayIndex < directionArrayIndex.length; directionArrayIndex++){
//         if (clickedPositionArray[0] + vectorArray[0] && clickedPositionArray[1] + vectorArray[1]) === ('other player' || 'your chip' || empty)
//             while ....
//     }
// }

//create for loop to go take in the array information, remove all classes, and then add the class for the current player.
//based on the current player, use if else statement to switch between players
