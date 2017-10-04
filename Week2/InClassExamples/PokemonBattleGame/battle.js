/*
This is a silly pokemon game developed by Joshua Clark to explain objects and functions 
to students at Green River College in IT207 FALL 2017

The goal is to choose the best pokemon to win!

This page handles the battle sequence.
*/


//fields
//*******

var players = []; //array of players in the game
var brTag = "<br>";

//objects
//*******

//Create objects using constructor functions to be able to create multiple objects
//Of the same structure. We will have multiple players and pokemon, so this is good.

//Create player Object with constructor
function Player(playerName, pokemon) {
    this.playerName = playerName;
    this.pokemon = pokemon; //assign this after the player chooses a pokemon
    this.numberOfWins = 0;
    this.score = 0;
    this.winner = false;
}

//Create Pokemon Object
function Pokemon(name) {

    this.name = name;

    //create pokemon object based on name with expressions
    switch (name) {
        case 'Pikachu':
            this.attackPower = 100;
            this.healthPoints = 50;
            this.imageURL = "./img/pokemonGameImages/pikachu.png";
            break;

        case 'Bulbasaur':
            this.attackPower = 75;
            this.healthPoints = 50;
            this.imageURL = "./img/pokemonGameImages/bulbasaur.png";
            break;

        case 'Squirtle':
            this.attackPower = 50;
            this.healthPoints = 50;
            this.imageURL = "./img/pokemonGameImages/squirtle.png";
            break;

        case 'Charmander':
            this.attackPower = 25;
            this.healthPoints = 50;
            this.imageURL = "./img/pokemonGameImages/charmander.png";
            break;
    }
}

//This function creates the initial setup of the game, including players, pokemon, and stuff
function startBattle() {

    //fields or properties of the start battle function
    var playerCount = prompt("How many players?\n1.)\n2.)");
    //cast the input from string to number
    playerCount = parseInt(playerCount);
    console.log("Number of players is: " + playerCount);
    var playerOne = new Player();
    var playerTwo = new Player();

    //create players based on how many players were chosen to play
    //************************************************************

    //create player one & two
    if (playerCount === 1) {

        //create player one object
        playerOne = createPlayer();

        //create computer player named Gary since we only have one user
        var computerPlayer = new Player("Gary", new Pokemon("Squirtle"));

        //add the players to the player array;
        players.push(playerOne);
        players.push(computerPlayer);

        //log the players created for debugging
        //console.log(players)
    }
    if (playerCount === 2) {
        //create both players
        playerOne = createPlayer();
        playerTwo = createPlayer();

        //add players to array
        players.push(playerOne);
        players.push(playerTwo);

        //log the players array
        //console.log(players);
    }

    //Hide the start game button
    document.getElementById("startGameButton").style.visibility="hidden";

    //call a function to update elements of the document with our new
    //new information from the user
    displayPlayers(players);

    //Show the fight game button
    document.getElementById("fightButton").style.visibility="visible";

}

//display players to document
function displayPlayers(players) {

    //pull each player out of the players array
    var playerOne = players[0];
    var playerTwo = players[1];

    //Display player one's name
    document.getElementById("player1").innerHTML +=
        playerOne.playerName +
        brTag +
        playerOne.pokemon.name +
        brTag +
        "<img src=" + playerOne.pokemon.imageURL + ">";

    //Display player two
    document.getElementById("player2").innerHTML +=
        playerTwo.playerName +
        brTag +
        playerTwo.pokemon.name +
        brTag +
        "<img src=" + playerTwo.pokemon.imageURL + ">";


}

//function to create player object based on user input
function createPlayer() {

    //ask for player name
    var playerName = prompt("What is your name?");

    //Say hello to player
    alert("Hello " + playerName + "\nWelcome to Pokemon Battle!")

    //ask player to choose pokemon
    var pokemonName = prompt("Please enter which pokemon you choose?\nPikachu?\n" +
        "Bulbasaur?\nSquirtle?\nCharmander?");

    //create users pokemon
    var pokemon = new Pokemon(pokemonName);

    //Confirm with user what pokemon they chose!
    alert(pokemon.name + " I choose you!");

    //create player object after receiving input from user.
    var player = new Player(playerName, pokemon);

    return player;
}

//function to save player stats after battle into local storage
function savePlayerData () {
    //Store player data to local storage, so we can grab it for the scores page
    localStorage.setItem("players", JSON.stringify(players));
    alert("Player data was saved to local storage");
}

