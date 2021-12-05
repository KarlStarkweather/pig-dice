Pig Dice

Rules of play:
1. Player 1 rolls dice repeatedly, adding up scores until they choose to "hold" or they roll a 1
2. If the player holds, their score is added to their total and player 2 takes their turn
3. If the player rolls a 1, they lose both their turn and their score for that turn
4. When either player accumulates 100 points the game is over and that player declared the winner


Specs

Description: Dice can be rolled
Test: when dice are rolled, a random number between 1 and 6 is returned
Code: dice1.roll()
Expected Output: number between 1 and 6

Description: Rolls for a turn are accumulated
Test: two rolls are made, and a player keeps a tally
Code: player1.rollDice()
Expected Output: current roll plus previous rolls

Description: Turns are created
Test: Code is able to take turns between players
Code: game1.player1Turn
Expected Output: turns are logged

Description: Player has option to hold turn
Test: When player wants to hold turn, their score is put onto the scoreboard and their turn is ended.
Code: player1.hold()
Expected Output: Score is added to scoreboard, turn ends.