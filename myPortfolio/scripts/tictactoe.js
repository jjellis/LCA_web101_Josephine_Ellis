var gameMarker = "x";

function changeMarkerTox(){
    gameMarker = "x";
    console.log("the x button was clicked")
 }
function changeMarkerToo(){
    gameMarker = "o";
    console.log("the o  button was clicked")
 }
 function placeMark(divId){
    var box = document.getElementById(divId);
    box.innerHTML = gameMarker;
 }
 function placeMark(clicked_id){
    if (document.getElementById(clicked_id).innerHTML ==='' ){
    document.getElementById(clicked_id).innerHTML = gameMarker;
    if (gameMarker === "x"){
       gameMarker = "o";
    }
    else{ (gameMarker = "x")
   }
}
 }

 function refreshPage(){
   document.getElementById("clear").innerHTML =
   window.location.reload();
}

var winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];

function playerWins(gameMarker) {
    return winConditions.some(function(threeInARow) {
        return threeInARow.every(function(square) {
            return board[square] === gameMarker;
        });
    });
}


