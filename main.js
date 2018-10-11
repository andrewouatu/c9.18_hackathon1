
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

}

function getClickedSquarePosition() {
    var inputPositionArray = [];
    inputPositionArray[0] = $(event.currentTarget).attr("data-row");
    inputPositionArray[1] = $(event.currentTarget).attr("data-col");
    console.log(inputPositionArray);
}

        // var gameBoard = [
        //
        //     ["0", "0", "0", "0","0", "0","0","0"],
        //     ["0", "0", "0", "0","0", "0","0","0"],
        //     ["0", "0", "0", "0","0", "0","0","0"],
        //     ["0", "0", "0", "1","2", "0","0","0"],
        //     ["0", "0", "0", "2","1", "0","0","0"],
        //     ["0", "0", "0", "0","0", "0","0","0"],
        //     ["0", "0", "0", "0","0", "0","0","0"],
        //     ["0", "0", "0", "0","0", "0","0","0"],
        // ]





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



// var gameround = true
// gameround = !gameround

// function checkNextToCurrentPlayerColor(startPoint, userColor, opponentColor){
//     var possibilities = [];
//     while (var moveDirectionsArrayIndex=0; moveDirectionsArrayIndex<moveDirectionsArray.length; moveDirectionsArrayIndex++) {
//
//     while (gameBoardArray[spotCheckd])
// }




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


// function addClasstoChip(){
//     $("#square" + row + "-" + column).addClass("black");
//
// }
//
// var currentLocation = [];
//
// function selectSquare(row, column) {
//
//     $("#square" + row + "-" + column).addClass("black");
//     currentLocation.push(row);
//     currentLocation.push(column);
// }
//
// function addClass() {
//     $("#chip").addClass("white");
// }
//
// addClass();
//
// function addClick() {
//     $('.square').click(chipClicked)
// }
//
//
// function chipClicked(){
//     currentChip = event.currentTarget;
//     $('.chip').addClass("black");
// }
// //
//
//
// function showCard(card){
//     $(card).addClass('hide');
// }
//
// if(firstCardClicked === null){
//     firstCardClicked = event.currentTarget;
//     showCard(event.currentTarget);
//


// function addChip(row, col){
//     $('div').addClass("white");
//
// }
//
// addChip(0,0);

