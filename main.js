
$(document).ready(initializeApp);

var playerTurn = 1;
var clickedPosition=[];
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
    printChipColorsFromGameBordArray(gameBoardArray);
}

function getClickedSquarePosition() {

    var rowPosition = parseInt($(event.currentTarget).attr("data-row"));
    var colPosition = parseInt($(event.currentTarget).attr("data-col"));


    console.log(gameBoardArray);
    clickedPosition = [rowPosition, colPosition];
    console.log(clickedPosition);
    handlePlayerTurn(clickedPosition);
}
var gameBoardArray =[];
for(var rowIndex = 0; rowIndex < 8; rowIndex++){
    gameBoardArray[rowIndex] = [];
    for(var columnIndex = 0; columnIndex < 8; columnIndex++){
        gameBoardArray[rowIndex][columnIndex] = 0;
    }
}

gameBoardArray[3][4] = 1;
gameBoardArray[4][3] = 1;
gameBoardArray[3][3] = 2;
gameBoardArray[4][4] = 2;

console.log(gameBoardArray);


function printChipColorsFromGameBordArray (gameBoard){

    for (var rowIndex = 0; rowIndex <8; rowIndex++) {
        var currentChip = [];
        currentChip[0] = rowIndex;
        for (var columnIndex = 0; columnIndex < 8; columnIndex++) {
            if (gameBoard[rowIndex][columnIndex] === 2) {

                $(`[data-row='${rowIndex}'][data-col='${columnIndex}'] .chip`).addClass('black');
                currentChip[1] = columnIndex;

            } else if (gameBoard[rowIndex][columnIndex] === 1) {
                $(`[data-row='${rowIndex}'][data-col='${columnIndex}'] .chip`).addClass('white');
            }
        }
    }
}









function handlePlayerTurn(clickedPositionArray){
    // if (occupied === true) {
    //     return;
    // }
    debugger;
    var row=clickedPositionArray[0];
    var col= clickedPositionArray[1];
    var otherPlayerChipPosition=[];
    var possibleChipPosition =[];
    for (var vectorArrayIndex = 0; vectorArrayIndex < vectorArray.length; vectorArrayIndex++){
        if (playerTurn === 1){
            possibleChipPosition[0] = row + vectorArray[vectorArrayIndex][0];
            possibleChipPosition[1] = col + vectorArray[vectorArrayIndex][1];
            row = possibleChipPosition[0];
            col = possibleChipPosition[1];
            console.log(row,col);
            console.log(gameBoardArray)

            if(gameBoardArray[row][col] ===2){
                otherPlayerChipPosition.push(possibleChipPosition);
                row = possibleChipPosition[0];
                col = possibleChipPosition[1];
                possibleChipPosition =[];
                while (gameBoardArray[row][col] === 2 ) {
                    possibleChipPosition[0] = row + vectorArray[vectorArrayIndex][0];
                    possibleChipPosition[1] = col + vectorArray[vectorArrayIndex][1];
                    row = possibleChipPosition[0];
                    col = possibleChipPosition[1];
                    otherPlayerChipPosition.push(possibleChipPosition);
                    possibleChipPosition =[];

                }
                possibleChipPosition[0] = row + vectorArray[vectorArrayIndex][0];
                possibleChipPosition[1] = col + vectorArray[vectorArrayIndex][1];
                row = possibleChipPosition[0];
                col = possibleChipPosition[1];
                }
                else if (gameBoardArray[row][col] ===1) {
                gameBoardArray[clickedPosition] = playerTurn;


                }
            }

        }

    }
    console.log(gameBoardArray);
printChipColorsFromGameBordArray(gameBoardArray);
function changePlayer() {
    if (playerTurn === 1) {
        playerTurn = 2;
    } else {
        playerTurn = 1;

    }
}


//create for loop to go take in the array information, remove all classes, and then add the class for the current player.
//based on the current player, use if else statement to switch between players
