
$(document).ready(initializeApp);


var currentPlayerChipsPosition=[];
var moveDirectionsArray = [
    {row: -1, column: -1},
    {row: -1, column: 0},
    {row: -1, column: 1},
    {row: 0, column: 1},
    {row: 1, column: 1},
    {row: 1, column: 0},
    {row: 1, column: -1},
    {row: 0, column: -1},
]




function initializeApp() {
    $('.square').click(getClickedSquarePosition);

    // var gameBoardArray = [
    //     ["0", "0", "0", "0","0", "0","0","0"],
    //     ["0", "0", "0", "0","0", "0","0","0"],
    //     ["0", "0", "0", "0","0", "0","0","0"],
    //     ["0", "0", "0", "1","2", "0","0","0"],
    //     ["0", "0", "0", "2","1", "0","0","0"],
    //     ["0", "0", "0", "0","0", "0","0","0"],
    //     ["0", "0", "0", "0","0", "0","0","0"],
    //     ["0", "0", "0", "0","0", "0","0","0"],
    // ];
    // findStartingChipsPositionForCurrentPlayer(gameBoardArray);

}

// var gameround = true
// gameround = !gameround

// function checkNextToCurrentPlayerColor(startPoint, userColor, opponentColor){
//     var possibilities = [];
//     while (var moveDirectionsArrayIndex=0; moveDirectionsArrayIndex<moveDirectionsArray.length; moveDirectionsArrayIndex++) {
//
//     while (gameBoardArray[spotCheckd])
// }

var gameBoardArray = [
                    ["0", "0", "0", "0","0", "0","0","0"],
                    ["0", "0", "0", "0","0", "0","0","0"],
                    ["0", "0", "0", "0","0", "0","0","0"],
                    ["0", "0", "0", "1","2", "0","0","0"],
                    ["0", "0", "0", "2","1", "0","0","0"],
                    ["0", "0", "0", "0","0", "0","0","0"],
                    ["0", "0", "0", "0","0", "0","0","0"],
                    ["0", "0", "0", "0","0", "0","0","0"],
                ];


// function findStartingChipsPositionForCurrentPlayer (gameBoard){
// debugger;
//     for (var rowIndex = 0; rowIndex <8; rowIndex++){
//         var currentChip = [];
//         currentChip[0]=rowIndex;
//         for (var columnIndex = 0; columnIndex<8; columnIndex++) {
//             if(gameBoard[rowIndex][columnIndex]==='2'){
//
//
//                 currentChip[1]=columnIndex;
//                 currentPlayerChipsPosition.push(currentChip);
//                 console.log(currentChip);
//             }
//
//         }
//     }
//     return currentPlayerChipsPosition;
// }
// findStartingChipsPositionForCurrentPlayer(gameBoardArray);
// console.log(currentPlayerChipsPosition);
//
//
// }

function getClickedSquarePosition(){
    inputPositionArray=[];
    inputPositionArray[0]=$(event.currentTarget).attr(data-row);
    inputPositionArray[1]=$(event.currentTarget).attr(data-col);
    console.log(inputPositionArray);

}