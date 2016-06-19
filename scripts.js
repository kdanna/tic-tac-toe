	
	//figure out ways to put the event listen in the DOM
	//figure out how to avoid changing a cell once it has been used



	var turn = "x";
	var theBoxes = document.getElementsByClassName("cell");
	
	//TESTED. the start function happens on window load and sets 'x' to begin.
	function startGame() {
		theBoxes.innerText = turn;

	}

	//TESTED. the nextPlayer functions checks to see what the value of turn is and assigns the opposite.
	function nextPlayer(){
		if (turn === "x"){
			turn = "o";
		}else {
			turn = "x";
		}; 
	};



	// TESTED. the nextMove function is triggered by a click on the cell (from the html tag)
	function nextMove(cell) {	
		if(theBoxes.innerText = " "){
		 	cell.innerText = turn;
		 	nextPlayer();
		}
	}

	

	//I think i might have to set this as an array since that is how the divs were identified by query search
	function isWinner(move){
		var gameOver = false;
		if  (threeInaRow(1,2,3, move)||
			threeInaRow(4,5,6, move) ||
			threeInaRow(7,8,9, move) ||
			threeInaRow(1,5,9, move) ||
			threeInaRow(3,5,7, move) ||
			threeInaRow(1,4,7, move) ||
			threeInaRow(2,5,8, move) ||
			threeInaRow(3,6,9, move)){
		
			gameOver = true;
			}
		return gameOver;
		};


	// trying to determine what 
	function threeInaRow(x,y,z, move){
		var results = false;
		if (status(x) === move && status(y) === move && status(z) === move){
		var results = true;
		}
		return results;
	}


	function getBoxStatus(number){
		var status = document.querySelectorAll('div div');

	}

