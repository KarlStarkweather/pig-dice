// Business Logic

function Player(name) {
  this.name = name;
  this.currentRoll = 0;
  this.roundScore = 0;
  this.position = 0;
}

Player.prototype.rollDice = function(game1) {
  const roll =  Math.floor((Math.random() * 6) + 1);
  this.currentRoll = roll;
  this.roundScore += roll;
  if (roll === 1) {
    this.roundScore = 0;
    this.hold(game1);
  };
}

function Game(player1, player2) {
  this.gameName = "Pig dice";
  this.player1 = player1;
  this.player1.position = 1;
  this.player2 = player2;
  this.player2.position = 2;
  this.player1Total = 0;
  this.player2Total = 0;
  this.currentPlayer = player1;
}

Game.prototype.playForComputer = function(game1) { // computer takes 2 rolls
  this.player2.rollDice(game1);
  if (this.player2.currentRoll > 1) {
    this.player2.rollDice(game1);
  } if (this.player2.currentRoll > 1) {
    this.player2.hold(game1);
  }
}

Player.prototype.hold = function(game1) {
  if (this.position === 1) {
    game1.player1Total += this.roundScore;
    game1.currentPlayer = game1.player2;
    game1.playForComputer(game1);
  } else {
    game1.player2Total += this.roundScore;
    game1.currentPlayer = game1.player1;
  };
  this.roundScore = 0;
}


//UI Logic
$(document).ready(function() {
  $("#begin").click(function() {
    $("#playerName").show();
    $("#nameLabel").show();
    $("#begin").hide();
    // $(".hiddenStuff").show();
    // $("#roll").hide();
    $("#playerName").change(function() {
      $("#roll").show();
      $("#playerName").hide();
      $("#nameLabel").hide();
      let player1 = new Player($("#playerName").val());
      let player2 = new Player("Hal");
      let game1 = new Game(player1,player2);
      $("#player1-name").text("Player One: " + player1.name);
      $("#player2-name").text("Player Two: " + player2.name);
      $("#roll").click(function() {
        player1.rollDice(game1);
        $("#player1-roll").text(player1.currentRoll);
        $("#player2-roll").text(player2.currentRoll);
        $("#player1-score").text(player1.roundScore);
        $("#player2-score").text(player2.roundScore);
        $("#player1-total").text(game1.player1Total);
        $("#player2-total").text(game1.player2Total);
        
        });
      $("#hold").click(function() {
        player1.hold(game1);
        $("#player1-roll").text(player1.currentRoll);
        $("#player2-roll").text(player2.currentRoll);
        $("#player1-score").text(player1.roundScore);
        $("#player2-score").text(player2.roundScore);
        $("#player1-total").text(game1.player1Total);
        $("#player2-total").text(game1.player2Total);
      });
    })
  })
})