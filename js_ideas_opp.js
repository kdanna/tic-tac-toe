
window.onload = function(Player){

var theBoxes = document.getElementsByClassName("cell"); //returns each div class="cell"
var count = 0;
var player1 = new Player("x", "#64908A");
var player2 = new Player("o", "#90646a");


function Player (player, boxColor) {
	this.player = player;
	this.boxColor = boxColor;
		
}

for (var i = 0; i < theBoxes.length; i++){
	theBoxes[i].addEventListener("click", turn);
	console.log("add event listener to box Ids is working");
}


function turn() {		
count = count+1;
	// if(winner === true){
	// 	console.log("we have a winner");
	// }
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

document.getElementById("playAgain").addEventListener("click", clearBoard);

function clearBoard(){
console.log("clearBoard function is working");
theBoxes = 	document.getElementsByClassName("cell");
	for(var i = 0; i < theBoxes.length; i++)  {
		theBoxes[i].innerHTML ="";
		theBoxes[i].style.backgroundColor = "";
	}
	}

};


























