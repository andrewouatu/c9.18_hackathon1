
$(document).ready(initializeApp);

var playerTurn = 1;
var clickedPosition=[];
var saveToTurn;
var gameBoardArray = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2],
    [0, 2, 2, 2, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 2, 1, 0, 0],
    [0, 2, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];
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
    if(checkIfItValidToClick (rowPosition,colPosition)===false){
        return;
    }
    if( checkIfNoPossibleChipToFlip(rowPosition,colPosition)===false){
        console.log("returnet from 8 falers")
        return;
    }

    toRevileAndFlipChipsWithCurrentPlayerColor (rowPosition,colPosition)
    printChipColorsFromGameBordArray (gameBoardArray);








}
function toRevileAndFlipChipsWithCurrentPlayerColor (row, col){
    // $(".square[data-row="+row+"][data-col="+col+"]").addClass('clicked');

    var possiblePosition = [];
    var truePositionArray=[];
    var oppositePlayer = null;
    /*
        //get the current player
        //get the opposite player
        //make an array to store chips to flip for this spot
        //check each direction from the current spot
            //make an array of possible chips to flip for this direction
            //if you encounter opposite color
                //T: loop moving in current direction.
                    //add current spot to possible chips to flip
                    //if current spot is player's color
                        //T: add possible chips to "chips to flip for this spot"
                        continue loop
                        //F: exit loop



     */


    if (playerTurn ===1) {
        oppositePlayer = 2;
    } else {
        oppositePlayer = 1;
    }
    var verifiedPositionsToFlip = [];
    for (var vectorArrayIndex = 0; vectorArrayIndex < vectorArray.length; vectorArrayIndex++) {
        var positionsToFlip = [];
        possiblePosition[0] = row + vectorArray[vectorArrayIndex][0];
        possiblePosition[1] = col + vectorArray[vectorArrayIndex][1];

        // $(".testing").removeClass('testing');
        // $(".square[data-row="+possiblePosition[0]+"][data-col="+possiblePosition[1]+"]").addClass('testing');
        console.log(possiblePosition);

        if (getValueFromGameBoard(possiblePosition[0],possiblePosition[1]) === oppositePlayer){
            // saveToTurn=[possiblePosition[0],possiblePosition[1]];
            while(getValueFromGameBoard(possiblePosition[0],possiblePosition[1]) === oppositePlayer){
                positionsToFlip.push( possiblePosition.slice())
                possiblePosition[0] += vectorArray[vectorArrayIndex][0];
                possiblePosition[1] += vectorArray[vectorArrayIndex][1];

            }
            if (getValueFromGameBoard(possiblePosition[0],possiblePosition[1]) === playerTurn ) {
                if(positionsToFlip.length>0){
                    gameBoardArray[row][col] = playerTurn;
                }
                verifiedPositionsToFlip = verifiedPositionsToFlip.concat(positionsToFlip);
                console.log("these should be flipped",positionsToFlip);

            }

        }

    }
    if(verifiedPositionsToFlip.length>0){
        var flipValues = {
            1: 2,
            2: 1
        }
        for(var flipIndex=0; flipIndex<verifiedPositionsToFlip.length; flipIndex++){
            var xPos = verifiedPositionsToFlip[flipIndex][1];
            var yPos = verifiedPositionsToFlip[flipIndex][0];
            //var valueAtPosition = gameBoardArray[yPos][xPos];
            // if(valueAtPosition===1){
            //     gameBoardArray[yPos][xPos] gameBoardArray[yPos][xPos]= 2;
            // } else {
            //     gameBoardArray[yPos][xPos] =1;
            // }
            gameBoardArray[yPos][xPos]= flipValues[gameBoardArray[yPos][xPos]]

        }
    }
    changePlayer();

}

function getValueFromGameBoard(y,x){
    if(gameBoardArray[y]===undefined){
        return false
    }
    if(gameBoardArray[y][x]===undefined){
        return false;
    }
    return gameBoardArray[y][x];
}

function checkIfItValidToClick (row,col){
    if (gameBoardArray[row][col] !==0){

        console.log('it returns because it was clicked')
        return false;
    }
}
function checkIfNoPossibleChipToFlip(row,col) {
    var limitOfNotMatch = 0;
    var possibleFailPosition = [];
    for (var vectorArrayIndex = 0; vectorArrayIndex < vectorArray.length; vectorArrayIndex++) {
        possibleFailPosition[0] = row + vectorArray[vectorArrayIndex][0];
        possibleFailPosition[1] = col + vectorArray[vectorArrayIndex][1];
        if (gameBoardArray[possibleFailPosition] === "undefined") {
            limitOfNotMatch++
        }

        else if (gameBoardArray[possibleFailPosition] === 0) {
            limitOfNotMatch++
        }

        else if (gameBoardArray[possibleFailPosition] === playerTurn) {
            limitOfNotMatch++
        }
        else {
            console.log('else')
        }
    }
    if (limitOfNotMatch === 8) {
        console.log('it 8 match')
        return false;
    }


}



function printChipColorsFromGameBordArray (gameBoard){

    for (var rowIndex = 0; rowIndex <8; rowIndex++) {
        var currentChip = [];
        currentChip[0] = rowIndex;
        for (var columnIndex = 0; columnIndex < 8; columnIndex++) {
            if (gameBoard[rowIndex][columnIndex] === 2) {

                $(`[data-row='${rowIndex}'][data-col='${columnIndex}'] .chip`).removeClass('black white').addClass('black');
                currentChip[1] = columnIndex;

            } else if (gameBoard[rowIndex][columnIndex] === 1) {
                $(`[data-row='${rowIndex}'][data-col='${columnIndex}'] .chip`).removeClass('black white').addClass('white');
            }
        }
    }
}


function changePlayer() {
    if (playerTurn === 1) {
        playerTurn = 2;
    } else {
        playerTurn = 1;

    }
}


//create for loop to go take in the array information, remove all classes, and then add the class for the current player.
//based on the current player, use if else statement to switch between players
