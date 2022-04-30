# Tic Tac Toe 
<a href="https://rosalinb.github.io/tic-tac-toe">Click here to play the game</a>

### Summary of project 
<p>Tic-Tac-toe is a two player game played by filling empty rectangles with either X or O player taking turns one after another.Once a player succeeds to line up their sings horizontally, diagonally or vertically without any interruption from other player's sign, that player wins.If neither of the player are able to achieve this goal,the game ends in a draw.</p>

### Plan/approach took to solve the problem
1. There should 2 players to start the game, so create 2 variables with a value for their entry.
2. create a Main containter (div) for the play board.
3. create 9 more cells (div) for the players entry as children to the playboard container.
4. To access the each cell of the playboard, treat them like an array from index 0-9
5. Write a logic for only one player to choose a cell at a time. (isPlayer1Playing ===true ? player1turn : player2turn)
6. once the players are able to click and make there entry, save the player's entry for comparing the winning logic.
7. To save the entery value when a player clicks I tried to save it as an attribute to each cells clicked with the setAttribute() which allows us to set the value with the cells index.
8. For the winning logic, created an array of array's with all the possibile combination.
9. With every player's turns check they have reached the winning option and diplay the result



### Code i am proud of:



### Lessons i have learnt
For comparing the winning options with the index of the cell, looping and comparing needed many lines of code.
so learnt the use of :
1.array.some() & array.every() : they works just "||" and "&&" operators respectively.
2.Also learnt the "arrow function" which I found was really handy to write the function defination in 1 line. It doesn;t use the function keyword or function name. can be used to assig a function to a variable and can be invoked by the variable name.

