console.log('JS is loaded!');

//Dynamically Create A master deck and smaller decks for board
// function buildDeck(){
// 	var deckCount = 0;
// 	var numerator = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// 	var denominator = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// 	var value = numerator/denominator;
// 	var deck = [];
// 	for (var n = 1; n <=numerator.length; n++){
// 		for (var d = 1; d <=denominator.length; d++){
// 			deck.push('text: "' + numerator[n] + '/' + denominator[d] + ', value: "' + numerator[n]/denominator[d])
// 		}
// 	} 
// }

//create Decks
var decks = [
[{text: "5/10", value: .5},{text: "3/4", value: .75}, {text: "1/5", value: .2}, 
{text: "3/8", value: .375}, {text: "6/10", value: .6}, {text: "4/5", value: .8},
{text: "3/7", value: .429 }, {text: "6/12", value: .5},{text: "4/8", value: .5},
{text: "1/16", value: .063},{text: "3/15", value: .2}, {text: "4/5", value: .8}, 
{text: "2/3", value: .667}, {text: "9/12", value: .75}, {text: "8/10", value: .8},
{text: "1/2", value: .5}],

[{text: "2/4", value: .5},{text: "3/1", value: 3}, {text: "10/20", value: .5},
{text: "6/8", value: .75},{text: "6/2", value: 3}, {text: "1/2", value: .5},
{text: "3/6", value: .5},{text: "1/9", value: .111}, {text: "11/12", value: .917},
{text: "5/10", value: .5},{text: "9/12", value: .75}, {text: "6/7", value: .86}, 
{text: "3/24", value: .125}, {text: "4/2", value: 2}, {text: "12/16", value: .75},
{text: "3/4", value: .75},],

[{text: "2/4", value: .5},{text: "1/2", value: .5}, {text: "3/5", value: .6},
{text: "2/6", value: .333},{text: "3/9", value: .333}, {text: "6/9", value: .667},
{text: "2/7", value: .286},{text: "3/4", value: .75}, {text: "5/6", value: .833},
{text: "4/10", value: .4},{text: "7/8", value: .875}, {text: "5/15", value: .333}, 
{text: "3/16", value: .188}, {text: "4/1", value: 4}, {text: "1/11", value: .091},
{text: "1/3", value: .333},],

[{text: "1/8", value: .125},{text: "1/2", value: .5}, {text: "15/18", value: .833},
{text: "2/3", value: .667},{text: "10/12", value: .833}, {text: "6/9", value: .667},
{text: "6/10", value: .6},{text: "8/12", value: .667}, {text: "1/9", value: .111},
{text: "6/2", value: 3},{text: "7/8", value: .875}, {text: "4/8", value: .5}, 
{text: "25/30", value: .833}, {text: "4/1", value: 4}, {text: "1/11", value: .091},
{text: "5/6", value: .833},],

[{text: "5/10", value: .5},{text: "2/16", value: .125}, {text: "3/5", value: .6}, 
{text: "4/8", value: .5}, {text: "6/10", value: .6}, {text: "4/5", value: .8},
{text: "3/12", value: .25 }, {text: "8/12", value: .75},{text: "4/8", value: .5},
{text: "1/16", value: .063},{text: "5/5", value: 1}, {text: "1/4", value: .25}, 
{text: "2/3", value: .667}, {text: "9/12", value: .75}, {text: "5/20", value: .25},
{text: "2/8", value: .25}],

[{text: "6/30", value: .2},{text: "1/3", value: .333}, {text: "0/20", value: 0},
{text: "5/8", value: .675},{text: "5/1", value: 5}, {text: "11/22", value: .917},
{text: "3/5", value: .6},{text: "4/20", value: .2}, {text: "6/7", value: .86},
{text: "3/10", value: .3},{text: "4/12", value: .333}, {text: "1/1", value: 1}, 
{text: "6/24", value: .25}, {text: "1/2", value: .5}, {text: "1/5", value: .20},
{text: "2/10", value: .20},],

[{text: "2/4", value: .5},{text: "2/1", value: 2}, {text: "3/5", value: .6},
{text: "6/2", value: 3},{text: "2/16", value: .125}, {text: "4/32", value: .125},
{text: "2/7", value: .286},{text: "3/4", value: .75}, {text: "5/6", value: .833},
{text: "4/10", value: .4},{text: "5/16", value: .313}, {text: "1/4", value: .25}, 
{text: "3/16", value: .188}, {text: "3/1", value: 3}, {text: "1/11", value: .091},
{text: "1/8", value: .125},],

[{text: "2/4", value: .5},{text: "1/2", value: .5}, {text: "3/5", value: .6},
{text: "2/6", value: .333},{text: "3/9", value: .333}, {text: "6/9", value: .667},
{text: "2/18", value: .111},{text: "3/4", value: .75}, {text: "5/6", value: .833},
{text: "4/10", value: .4},{text: "7/8", value: .875}, {text: "3/27", value: .111}, 
{text: "3/16", value: .188}, {text: "4/1", value: 4}, {text: "1/11", value: .091},
{text: "1/9", value: .111},],

[{text: "2/4", value: .5},{text: "8/20", value: .4}, {text: "3/5", value: .6},
{text: "2/6", value: .333},{text: "4/10", value: .4}, {text: "6/9", value: .667},
{text: "2/7", value: .286},{text: "3/4", value: .75}, {text: "5/6", value: .833},
{text: "4/10", value: .4},{text: "16/40", value: .4}, {text: "5/15", value: .333}, 
{text: "3/16", value: .188}, {text: "4/1", value: 4}, {text: "1/11", value: .091},
{text: "2/5", value: .4},],

];

//new game

var deckNum = 0;

function newGame(){
	$('#1').data('value',decks [deckNum][0].value).text(decks [deckNum][0].text); 
	$('#2').data('value',decks [deckNum][1].value).text(decks [deckNum][1].text); 
	$('#3').data('value',decks [deckNum][2].value).text(decks [deckNum][2].text); 
	$('#4').data('value',decks [deckNum][3].value).text(decks [deckNum][3].text); 
	$('#5').data('value',decks [deckNum][4].value).text(decks [deckNum][4].text); 
	$('#6').data('value',decks [deckNum][5].value).text(decks [deckNum][5].text); 
	$('#7').data('value',decks [deckNum][6].value).text(decks [deckNum][6].text);
	$('#8').data('value',decks [deckNum][7].value).text(decks [deckNum][7].text); 
	$('#9').data('value',decks [deckNum][8].value).text(decks [deckNum][8].text); 
	$('#10').data('value',decks [deckNum][9].value).text(decks [deckNum][9].text);
	$('#11').data('value',decks [deckNum][10].value).text(decks [deckNum][10].text); 
	$('#12').data('value',decks [deckNum][11].value).text(decks [deckNum][11].text); 
	$('#13').data('value',decks [deckNum][12].value).text(decks [deckNum][12].text); 
	$('#14').data('value',decks [deckNum][13].value).text(decks [deckNum][13].text); 
	$('#15').data('value',decks [deckNum][14].value).text(decks [deckNum][14].text);
	$('.playCard').data('value',decks [deckNum][15].value).text(decks [deckNum][15].text);
	deckNum++;
}

//Score It! - keeps score in the game 
scoreValue = 0;

function scoreIt (){
$('.score').text(score +=50);
	$('.scoreValue').text(score);
	if (score >= 1000){
		$('.scoreValue').text("WIN!");
	}
}

function resetScore(){
	$('.scoreValue').text(0000);
}

//PLAY THE GAME	- the clicking action the chooses fractions and changes board
var score = 0;
	$('.cards').click(function(e){
		// $(this).unbind();
		console.log('clicked');
		var clickValue = $(e.target).data('value');	
		var playValue = $('.playCard').data('value');	
	if (clickValue === playValue){
		$(this).effect('pulsate', {times:2}, 1000);
		scoreIt();
	}	
//			alert('You Got It!')
	// newGame();				
	else { 
		// $('#buzz').play();
		$(this).effect("highlight", 2000);
//		alert('try Again.');	
	}
});

//CREATE TIMER and countdown function
var sec = 61;
countdown = function(){		//call when each deck is played
		var count = setInterval(function(){
		$('.sec').text(sec--);
			$('.clockValue').text(sec);
			console.log(sec);
			if (sec == -1){
				$('.clockValue').text('TIMES UP!');
				$('.next').hide();
//				$('.clockValue').fadeOut('slow');
				clearInterval(count);
			}
		}, 1000);	
		resetScore();		
}


//CREATE BUTTONS - start, reset and change difficulty
$('.start').click(function(e){			//starts clock and toggles buttons  
	newGame();
	countdown();
	$('.start').hide();
	$('.easy').hide();
	$('.hard').hide();
	console.log('start!')
})

$('.reset').click(function(e){			//refreshes page and restarts game
	console.log('reset!')
	window.location.reload(true);
})

$('.easy').click(function(e){			//makes game easy
	$('clockValue').text('60');
	sec = 61;
  
	console.log('easy! timer set at: ' + sec + ' seconds');
})

$('.hard').click(function(e){			//makes game harder
	sec = 31;
	$('clockValue').text('30');
	console.log('hard! timer set at: ' + sec + ' seconds');

})

$('.next').click(function(e){
//	shuffleDecks();
	newGame();
//	$('cards').bind('click', function(){

//	})
})	






 


