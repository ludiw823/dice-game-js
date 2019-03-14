var score, roundScore, activePlayer, dice, gamePlaying, winScore, dice1, dice2;

init();

//console.log(dice);

//document.querySelector('#current-'+activePlayer).textContent = dice;


document.querySelector('.btn-roll').addEventListener('click', function(){
     //random dice number
   if(gamePlaying){
   	 //prevDice = dice;
     var dice1 = Math.floor(Math.random()*6)+1;
     var dice2 = Math.floor(Math.random()*6)+1;

     //display the image of dice
     var diceDOM1 = document.getElementById('dice1');
     diceDOM1.style.display = 'block';
	 diceDOM1.src = 'img/dice-'+dice1+'.png';
	 diceDOM1.alt = 'Dice'+dice1;

	 var diceDOM2 = document.getElementById('dice2');
     diceDOM2.style.display = 'block';
	 diceDOM2.src = 'img/dice-'+dice2+'.png';
	 diceDOM2.alt = 'Dice'+dice2;


	 /*//update round score
	 if (prevDice===6 && dice ===6){
	 	//set globalScore = 0
	 	scores[activePlayer] = 0;
	 	//update UI
	 	document.querySelector('#score-' + activePlayer).textContent = '0';
	 	changePlayer();
	 }else */if(dice1!==1 && dice2!==1){
	 	roundScore = roundScore + dice1 + dice2;
	 	
	 	//console.log('prevDice:'+prevDice+"Dice: "+dice);
	 	document.querySelector('#current-'+ activePlayer).textContent = roundScore;
	 }
	 else{
	 	//change to next player
	 	changePlayer();

	 }
	 //console.log('preDice:'+prevDice+ 'Dice:'+dice);
	 //prevDice = dice;

   }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	
	var inputScore = document.getElementById("winNum").value;
	console.log("winning score: "+winScore);

	if(inputScore){
		winScore = inputScore;
	}else{
		winScore = 30;
	}

  if(gamePlaying){
	//add currentScore to globalScore
	scores[activePlayer] = scores[activePlayer]+roundScore;
	
	//update UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	//check winner

    if (scores[activePlayer] >= winScore){
    	document.getElementById('name-'+activePlayer).textContent = 'WINNER!!!'; 
    	document.querySelector('.dice').style.display = 'none';
    	document.getElementById("dice2").style.display = 'none';
        document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');

        //change the state to inactive
        gamePlaying = false;
      }
      else{
     //change to next player
	 changePlayer();}
    
   }

});

document.querySelector('.btn-new').addEventListener('click', init);

function changePlayer(){
        //prevDice = 0;
        if(activePlayer === 0){
	 		activePlayer = 1;
	 	}
	 	else{
	 		activePlayer = 0
	 	}
	 	//prevDice = 0;
	 	roundScore = 0;
	 	document.getElementById('current-0').textContent = 0;
	 	document.getElementById('current-1').textContent = 0;

	 	//change UI for active player
	 	document.querySelector('.player-0-panel').classList.toggle('active');
	 	document.querySelector('.player-1-panel').classList.toggle('active');

	 	//clear dice img
	 	document.querySelector('.dice').style.display = 'none';
	 	document.getElementById('dice2').style.display = 'none';
	 	
};

function init(){
	scores = [0,0];
	roundScore=0;
	activePlayer = 0;
	gamePlaying = true;
	//prevDice = 0;

	document.querySelector('.dice').style.display = 'none';
	document.getElementById('dice2').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.add('active');

	document.querySelector('.btn-hold').disabled = false;
    document.querySelector('.btn-roll').disabled = false;


}


