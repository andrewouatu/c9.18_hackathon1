
$(document).ready(initializeApp);

var moveDirectionsArray = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];

function initializeApp() {
    $('div').removeClass("black");
    $('div').removeClass("white";
}

var gameBoard = [
                    ["0", "0", "0", "0","0", "0","0","0"],
                    ["0", "0", "0", "0","0", "0","0","0"],
                    ["0", "0", "0", "0","0", "0","0","0"],
                    ["0", "0", "0", "1","2", "0","0","0"],
                    ["0", "0", "0", "2","1", "0","0","0"],
                    ["0", "0", "0", "0","0", "0","0","0"],
                    ["0", "0", "0", "0","0", "0","0","0"],
                    ["0", "0", "0", "0","0", "0","0","0"],
                ];


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