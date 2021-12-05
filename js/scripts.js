// Business Logic

function Dice() {
  this.currentRoll = 0;
  this.roll = function () {
    this.currentRoll = Math.floor((Math.random() * 5)+1);
    console.log(this.currentRoll);
  };
};

let dice1 = new Dice();
let dice2 = new Dice();

function Player(name,dice) {
  this.name = name;
  this.dice = dice;
  this.score = 0;
  this.position = 0;
}

Player.prototype.rollDice = function(game1) {
  this.dice.roll();
  this.score += this.dice.currentRoll;
  if (this.dice.currentRoll === 1) {
    this.score = 0;
    this.hold(game1);
  };
}

let player1 = new Player("Jim",dice1)
let player2 = new Player("Hal", dice2)

function Game(player1, player2) {
  this.gameName = "Pig dice";
  this.player1 = player1;
  this.player1.position = 1;
  this.player2 = player2;
  this.player2.position = 2;
  this.player1Tally = 0;
  this.player2Tally = 0;
  this.currentPlayer = player1;
}

let game1 = new Game(player1,player2);

Player.prototype.hold = function(game1) {
  if (this.position === 1) {
    game1.player1Tally += this.score;
    game1.currentPlayer = player2;
  } else {
    game1.player2Tally += this.score;
    game1.currentPlayer = player1;
  };
  this.score = 0;
}


//UI Logic
