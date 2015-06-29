/*
 * # Tic Tac Toe
 * 
 */

/*
 * ## State (Data Model)
 *
 * These are the data points and collections that we can use to represent the
 * game at any point.
 *
 */

var playing = false; // true
var turn    = "X";   // "O"
var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

/*
 * State-related helper functions can help us to understand the state of the
 * game at any point in time.
 * 
 * 1. Get a square's value.
 * 2. Print the board (console.log).
 * 3. Print the whole state of the game (console.log).
 * 
 */

// Get a square's value.
var getValueOf = function(y, x){
  var value = board[y][x];
  if (value) {
    return value;
  } else {
    return "_";
  }
  return true;
};

// Print the board.
var printTheBoard = function(){
  console.log( "  0 1 2");
  for (var i = 0; i < 3; i++) {
    console.log(
      i + " " + 
      getValueOf(i, 0) + " " + 
      getValueOf(i, 1) + " " + 
      getValueOf(i, 2)
    );
  }
  return true;
};

// Print the whole state of the game.
var printTheGame = function(){
  if (playing) {
    printTheBoard();
    console.log("It is player " + turn + "'s turn.");
  } else {
    console.log("The game is not currently being played.");
  }
  return true;
};

/*
 * ## Game (Problem Model)
 *
 * 1. The game begins.
 * 2. A player makes a move.
 * 3. Decide if the move is legal or not.
 * 4. Decide if the move wins or not.
 * 5. Decide if the game is tied or not.
 *
 */

// The game begins.
var beginGame = function() {
  playing = true;
  console.log("Beginning a new game. It is player X's turn.");
  return true;
};

// A player makes a move.
var move = function(y, x) {
  if (!moveIsLegal(y, x)) {
    console.log("This is not a legal move!");
    return false;
  }
  board[y][x] = turn;
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
  printTheGame(playing, turn, board);
  if (gameIsWon()) {
    // ...
  }
  if (gameIsTied()) {
    // ...
  }
  return true;
};

// Decide if the move is legal or not.
var moveIsLegal = function(y, x) {
  if (playing === false) {
    return false; // game hasn't begun...
  }
  if (y > 2 || y < 0 || x > 2 || x < 0) {
    return false; // squares not in play...
  }
  if (getValueOf(y, x) !== "_") {
    return false; // move has already been made...
  }
  return true;
}

// Decide if the move wins or not.
var gameIsWon = function() {

};

// Decide if the game is tied or not.
var gameIsTied = function() {

};
