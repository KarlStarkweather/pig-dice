function Dice() {
  this.currentRoll = 0;
  this.roll = function () {
    this.currentRoll = Math.floor((Math.random() * 5)+1);
  };
};

let dice1 = new Dice();

function Player(name,dice) {
  this.name = name;
  this.dice = dice;
  this.score = 0;
}

Player.prototype.takeRoll = function() {
  this.dice.roll();
  this.score += this.dice.currentRoll;
}

let player1 = new Player("Jim",dice1)
