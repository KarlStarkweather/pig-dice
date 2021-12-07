// Business Logic

// function Dice() {
//   this.currentRoll = 0;
//   this.roll = function () {
//     this.currentRoll = Math.floor((Math.random() * 6)+1);
//   };
// };

// let dice1 = new Dice();
// let dice2 = new Dice();

function Player(name) {
  this.name = name;
  this.currentRoll = 0;
  // this.dice = dice;
  this.score = 0;
  this.position = 0;
}

Player.prototype.rollDice = function(game1) {
  const roll =  Math.floor((Math.random() * 6)+1);
  // this.dice.roll();
  this.score += roll;
  if (roll === 1) {
    this.score = 0;
    this.hold(game1);
  };
}

// let player1 = new Player("Jim",dice1)
// let player2 = new Player("Hal", dice2)

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

// let game1 = new Game(player1,player2);

Player.prototype.hold = function(game1) {
  if (this.position === 1) {
    game1.player1Tally += this.score;
    game1.currentPlayer = game1.player2;
  } else {
    game1.player2Tally += this.score;
    game1.currentPlayer = game1.player1;
  };
  this.score = 0;
}


//UI Logic
$(document).ready(function() {
  $("#begin").click(function() {
    $("#playerName").show();
    $("#begin").hide();
    $(".hiddenStuff").show();
    $("#roll").hide();
    $("#playerName").change(function() {
      $("#roll").show();
      $("#playerName").hide();
      $("#nameLabel").hide();
      // let dice1 = new Dice();
      // let dice2 = new Dice();
      let player1 = new Player($("#playerName").val());
      let player2 = new Player("Hal");
      let game1 = new Game(player1,player2);
      console.log(game1);
      $("#roll").click(function() {
        player1.rollDice(game1);
        console.log("Current Roll: " + player1.currentRoll);
        console.log("Score so far: " + player1.score);
        $("#player1-roll").text(player1.currentRoll);
        $("#player2-roll").text(player2.currentRoll);
        $("#player1-score").text(player1.score);
        $("#player2-score").text(player2.score);
      });
    })
  })
})