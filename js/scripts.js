function Dice() {
  this.currentRoll = 0;
  this.roll = function () {
    this.currentRoll = Math.floor((Math.random() * 5)+1);
  };
};

let dice1 = new Dice();
