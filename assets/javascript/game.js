window.onload = function() {
var gemran = [];
var playerscore = 0;
var win = 0;
var lose = 0; 
var gamescore = 0;
function game(){

function gemscore(){
	for (var i = 0; i < 4 ; i++) {
		gemran.push(math.round(math.random() * (12)+1));}
	}
function objective (){
	gamescore = math.round(math.random() * (120-19)+19);
	console.log(gemscore);}
function reset(){
	gemran = [];
	objective ();
	playerscore = 0;
	$("#randomgnum").html(gamescore);
	$("#playerscore").html(playerscore);
	gemscore();
	$("winlose").html('<p> Wins: ' + win + '</p>' + '<p> Losses: ' + lose + '</p>' );
}

if (gamescore === playerscore){
	win++;
	$("#status").html("YOU WIN!");
	reset();
}

else if (playerscore > gamescore){
	lose++;
	$("#status").html("You lose!");
	reset();
}

else{

}
$("#1btn").on("click" , function(){
	playerscore= playerscore + gemran[1];
	$("#playerscore").html(playerscore);
	});

	$("#2btn").on("click" , function(){
	playerscore= playerscore + gemran[2];
	$("#playerscore").html(playerscore);
	});

	$("#3btn").on("click" , function(){
	playerscore= playerscore + gemran[3];
	$("#playerscore").html(playerscore);
	});

	$("#4btn").on("click" , function(){
	playerscore= playerscore + gemran[4];
	$("#playerscore").html(playerscore);
	});
}