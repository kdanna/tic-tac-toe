	
	//figure out ways to put the event listen in the DOM
	//figure out how to avoid changing a cell once it has been used

	var turn = "x";
	var theBoxes = document.getElementsByClassName("cell"); //returns each cell
	var clear = document.getElementsByClassName("playAgain");

	//TESTED. the start function happens on window load and sets 'x' to begin.
	function startGame() {
		theBoxes.innerText = turn;
		winner = null;
	}

	//TESTED. the nextPlayer functions checks to see what the value of turn is and assigns the opposite.
	function nextPlayer(){
		/*if (isWinner() === true){
			alert("we have a winner");*/
		if (turn === "x"){
			turn = "o";
		}else {
			turn = "x";
	}
};

	// TESTED. the nextMove function is triggered by a click on the cell (from the html tag)
	function nextMove(cell) {	
		if(cell.innerText === ""){
			cell.innerText = turn;
		 	nextPlayer();
		}else {
			alert("That box is already taken. Try again.");
		}
	}

	
/*Below are all my ideas for 1) determining winner and 2) making play again button fuction.  After two days of working on this non-stop I threw in the towel.


	//NOT WORKING 
	function isWinner(move){
		var winner = false;
		if  (threeInaRow(1,2,3, move)||
			threeInaRow(4,5,6, move) ||
			threeInaRow(7,8,9, move) ||
			threeInaRow(1,5,9, move) ||
			threeInaRow(3,5,7, move) ||
			threeInaRow(1,4,7, move) ||
			threeInaRow(2,5,8, move) ||
			threeInaRow(3,6,9, move)) {
			winner = true;
			}
		return winner;
		};

 	// should return the "x" or "o" and does when you test it solo
	function getBoxStatus(number){
		return theBoxes.innerText;
	}

	// This function works on its own when you pass is all "x" or "o", but it is returning false when used with other fucntions

	function threeInaRow(x,y,z, move){
		var results = false;
		if (getBoxStatus(x) === move && getBoxStatus(y) === move && getBoxStatus(z) === move){
		 results = true;
		}
		return results;
	}



General Idea for removing text from game, ie "resetting the board"
function eraseText(){
	document.getElementsByClassName("cell").empty();
}
*/


