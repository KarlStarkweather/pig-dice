// Business Logic

function Player(name) {
  this.name = name;
  this.currentRoll = 0;
  this.turnScore = 0;
  this.position = 0;
}

Player.prototype.rollDice = function(game1) {
  const roll =  Math.floor((Math.random() * 6) + 1);
  this.currentRoll = roll;
  this.turnScore += roll;
  if (roll === 1) {
    this.turnScore = 0;
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

Game.prototype.playForComputer = function() {
  this.player2.rollDice();
  if (this.player2.currentRoll > 1) {
    this.player2.rollDice();
  } if (this.player2.currentRoll > 1) {
    this.player2.hold();
  }
}

Player.prototype.hold = function(thisGame) {
  if (this.position === 1) {
    thisGame.player1Total = this.turnScore;
    thisGame.currentPlayer = thisGame.player2;
    thisGame.playForComputer();
  } else {
    thisGame.player2Total += this.turnScore;
    thisGame.currentPlayer = thisGame.player1;
  };
  this.turnScore = 0;
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
      let player1 = new Player($("#playerName").val());
      let player2 = new Player("Hal");
      let game1 = new Game(player1,player2);
      $("#player1-name").text("Player One: " + player1.name);
      $("#player2-name").text("Player Two: " + player2.name);
      console.log(game1);
      $("#roll").click(function() {
        player1.rollDice(game1);
        console.log("Current Roll: " + player1.currentRoll);
        console.log("Score this round: " + player1.turnScore);
        console.log("Game total: " + game1.player1Total);
        $("#player1-roll").text(player1.currentRoll);
        $("#player2-roll").text(player2.currentRoll);
        $("#player1-score").text(player1.turnScore);
        $("#player2-score").text(player2.turnScore);
        $("#player1-total").text(game1.player1Total);
        $("#player2-total").text(game1.player2Total);
        $("#hold").click(function() {
          player1.hold();
        });
      });
    })
  })
})