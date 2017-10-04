/*
This is a silly pokemon game developed by Joshua Clark to explain objects and functions 
to students at Green River College in IT207 FALL 2017

The goal is to choose the best pokemon to win!
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
    this.score = calculateScore(this.numberOfWins);
    this.winner = false;
}

//Create Pokemon Object
function Pokemon(name) {

    this.name = name;

    //create pokemon object based on name with expressions
    switch (name) {
        case 'Pikachu':
            this.attackPower = 50;
            this.healthPoints = 50;
            this.imageURL = "./img/pokemonGameImages/pikachu.png";
            break;

        case 'Bulbasaur':
            this.attackPower = 40;
            this.healthPoints = 50;
            this.imageURL = "./img/pokemonGameImages/bulbasaur.png";
            break;

        case 'Squirtle':
            this.attackPower = 30;
            this.healthPoints = 50;
            this.imageURL = "./img/pokemonGameImages/squirtle.png";
            break;

        case 'Charmander':
            this.attackPower = 20;
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

    //call a function to update elements of the document with our new
    //new information from the user
    displayPlayers(players)

}

//displayPlayerOne
function displayPlayerOne () {
    //player fields
    var playerOne = players[0];

    //Display player one's name
    document.getElementById("player1").innerHTML +=
        playerOne.playerName +
        brTag +
        playerOne.pokemon.name +
        brTag +
        "<img src=" + playerOne.pokemon.imageURL + ">";
}

//displayPlayerTwo
function displayPlayerTwo () {
    var playerTwo = players[1];

    //Display player two
    document.getElementById("player2").innerHTML +=
        playerTwo.playerName +
        brTag +
        playerTwo.pokemon.name +
        brTag +
        "<img src=" + playerTwo.pokemon.imageURL + ">";
}

//display players to document
function displayPlayers(players) {
    console.log("The players array is: ");
    console.log(players);

    //Hide the start game button
    document.getElementById("startGameButton").style.visibility="hidden";

    //call function that updates the document with player one's information
    displayPlayerOne();

    //Display the versus text
    document.getElementById("versus").innerHTML = "versus";

    //call similar function for player two... we could write one function that handles both players
    //if we passed each player as a parameter
    displayPlayerTwo();

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

//function to calculate the players score
function calculateScore(numberOfWins) {

    //To evaluate users score multiply their number of wins times 5
    return numberOfWins * 5;
}