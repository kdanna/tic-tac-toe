
window.onload = function(){

var theBoxes = document.getElementsByClassName("cell"); //returns each div class="cell"
var count = 0;
var player1 = new Player("x", "DarkCyan");
var player2 = new Player("o", "DarkOrange");


function Player (player, boxColor) {
	this.player = player;
	this.boxColor = boxColor;
		
}

for (var i = 0; i < theBoxes.length; i++){
	theBoxes[i].addEventListener("click", turn);
	console.log("add event listen to box ids is working");
}
//some disconnect between the event listeners on each cell, and the turn functions()

function turn() {		
count = count+1;
	if(event.target.innerHTML.length === 0){

		if (count%2 !== 0 ){
		    event.target.innerHTML= player1.player;
		   	event.target.style.backgroundColor = player1.boxColor;

		} else {
		    event.target.innerHTML = player2.player;
		    event.target.style.backgroundColor = player2.boxColor;
		}	
	}
	}
};

document.getElementById("playAgain").addEventListener("click", clearBoard);

function clearBoard(){
theBoxes = 	document.getElementsByClassName("cell");
	for(var i = 0; i < theBoxes.length; i++)  {
		theBoxes[i].innerHTML ="";
		theBoxes[i].style.backgroundColor = "white";
	}
}

//try to re-integrate the winner functions from before.

// function isWinner() {

// 		var winner = false;
// 		if  (threeInaRow(0,1,2,turn) ||
// 			threeInaRow(3,4,5, turn) ||
// 			threeInaRow(6,7,8, turn) ||
// 			threeInaRow(0,3,6, turn) ||
// 			threeInaRow(1,4,7, turn) ||
// 			threeInaRow(2,5,8, turn) ||
// 			threeInaRow(0,4,8, turn) ||
// 			threeInaRow(2,4,6, turn)) {
// 			winner = true;
// 			}
// 		return winner;
// 		};

//  	// TESTED. Returns the "x" or "o" in a particular cell.
// 	function getBoxStatus(boxIndex){
// 		return theBoxes[boxIndex].innerText;
// 	}

// 	// TESTED. Function works.

// 	function threeInaRow(x,y,z){
// 		var results = false;
// 		if (getBoxStatus(x) === turn && getBoxStatus(y) === turn && getBoxStatus(z) === turn){
// 		 results = true;
// 		}
// 		return results;
// 	}


