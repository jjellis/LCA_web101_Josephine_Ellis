var gameMarker = "x";
//var gameMarker = "o";
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
