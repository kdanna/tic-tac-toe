
	
	//need to figure out ways to put the event listen in the DOM
	//need to figure out how to color coat "x" and "o"
	//need to go back a refactor the isWinner function. Maybe declear winner options in array and loop through it.

	var boxColor = "DarkCyan";
	var turn = "x";
	var theBoxes = document.getElementsByClassName("cell"); //returns each div class="cell"
	var clearButton = document.getElementById("playAgain"); // returns the html button
	
	//TESTED. The start function happens on window load and sets 'x' to start.
	function startGame() {
		theBoxes.innerText = turn;
		winner = null;
	}

	//TESTED. The nextPlayer function checks to see if there has been a winner, what the value of turn is, and assigns the opposite.
	function nextPlayer(){
		if (isWinner()){
			alert("CONGRATS, We have a winner!"); 
			clearButton.innerText = "Play Again"; 
			return;
		}
		if (turn === "x"){
			turn = "o";
			boxColor = "DarkOrange";
		}else {
			turn = "x";
			boxColor = "DarkCyan";
		}
	}

	// TESTED. The nextMove function is triggered by a click on the cell (from the html tag)
	function nextMove(cell) {	
		if(cell.innerText === ""){
			cell.innerText = turn;
			cell.style.backgroundColor = boxColor;
		 	nextPlayer();
		}else {
			alert("That box is already taken. Try again.");
		}
	}


//TESTED. Consider refactoring and using a loop. Declare winningMoves array combos first, then loop.

	//NOT WORKING 
	function isWinner() {

		var winner = false;
		if  (threeInaRow(0,1,2,turn) ||
			threeInaRow(3,4,5, turn) ||
			threeInaRow(6,7,8, turn) ||
			threeInaRow(0,3,6, turn) ||
			threeInaRow(1,4,7, turn) ||
			threeInaRow(2,5,8, turn) ||
			threeInaRow(0,4,8, turn) ||
			threeInaRow(2,4,6, turn)) {
			winner = true;
			}
		return winner;
		};

 	// TESTED. Returns the "x" or "o" in a particular cell.
	function getBoxStatus(boxIndex){
		return theBoxes[boxIndex].innerText;
	}

	// TESTED. Function works.

	function threeInaRow(x,y,z){
		var results = false;
		if (getBoxStatus(x) === turn && getBoxStatus(y) === turn && getBoxStatus(z) === turn){
		 results = true;
		}
		return results;
	}



//TESTED. Works. Resets back to "Clear" once the "Play Again" button has been pressed.
function clearBoard(){
	for(var i = 0; i < theBoxes.length; i++)  {
		theBoxes[i].innerHTML ="";
		theBoxes[i].style.backgroundColor = "white";
	}
	if (clearButton.innerText === "Play Again"){
		clearButton.innerText = "Clear";
	} 

}