/*
This is a silly pokemon game developed by Joshua Clark to explain objects and functions
to students at Green River College in IT207 FALL 2017

The goal is to choose the best pokemon to win!

This file handles displaying the player game results to the scores page.
*/

//fields or variables
var players = localStorage.getItem('players'); //pulling the players out of the local storage
players = JSON.parse(players); //parsing the JSON out of the string saved in local storage
var winner = findWinner(players); //finds who is the winner with the return of the function.

//write to the document which player wins!
document.write(winner + " wins!");

//This function will find the winner from the battle
function findWinner(players) {

    var currentScore;
    var highScore = 0;
    var winner;

    for(var i = 0; i < players.length; i++){

        //find the score of the current player being looped over
        currentScore = players[i].pokemon.attackPower;

        //check to see if the current score is higher than the high score.
        if(currentScore > highScore){
            highScore = currentScore;
            winner = players[i].playerName
        }
    }

    return winner;
}

