// 1. set game board
// clear all x and o from the bord
// decide who makes the first move x or o
var moves=0;
/*currentPlayer = 1;
//function setUpBoard()
function placeMark(elementId,marker){
 var box=document.getElementById(elementId);
 if currentPlayer === 1{
     if(box.innerHTML==="")
    box.innerHTML="x";
    moves=moves+1;}
 else{
     box.innerHTML="o";}
    
currentPlayer = -1*currentPlayer;

}
//function changeMarkerTox(x){ console.log("The x button was clicked!")}
//function changeMarkerToo(o){ console.log("The o button was clicked!")}
//var gameMarker ="x"
//var gameMarker ="o"

//2. player clicks spot makes board error if spot is taken
function markBoard(){

}
//3. check if the game is finished after marking the board
//if finished send winner message
//if not other player make move
//repeat step 3 till finished or draw
function updateGameStatus(){

}

//4. promt players to decied if they want to play a new game
// if yes go to step one. 

clearBoard(){
    for(var i=1; i<10; i++)
    var box=document.getElementById(space1+i);
    box.innerHTML="";
}*/

var board;
const xplayer = 'x';
const aiplayer = 'o';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7 ,8],
    [0, 3, 6],
    [6, 4, 2],
    [0, 4, 8],
    [2, 5, 8],
    [1, 4, 7]
]

const row = document.querySelectorAll('.row');
startGame();

function clearBoard() {
 document.querySelector('end') .style.display = "none"
 board = Array.from(Array(9).keys());
 for (var i = 0; i < row.length; i++ ){
     row[i].innerText = '';
     row[i].styles.removeProperty(background-color);
     row[i].addEventListener('click', turnClick, false);
 }
}

function turnClick(square){
   turn(square.target.id, xplayer)

}
function turn(squareId, player){
    Board[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(board, player)
    if (gameWon) clearBoard(gameWon)
}

function checkWIn(board1, player) {
    let plays = board.reduce((a, e, i) =
     (e === player)) ? a.concat(i) : a, [])
     let gameWon = null;
     for (let [index, win] of winCombos.entries()){
       id (win.every(elem = plays.indexOf(elem > -1)))  {
        gameWOn = {index: index} player: player};   
        break;
       }
     }
      
}