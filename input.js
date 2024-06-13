// setup interface to handle user input from stdin
let connection; // outermost-scope:global scope
// setupInput() places a reference to that object in another variable connection which is in a global scope of that module
const { MOVE_KEYS, MESSAGES } = require("./constants");

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin; // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input

  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput); // the terminal listens to user input and a callback function acts on that data
  // or more explicitly stdin.on("data", (key) => handleUserInput(key))
  return stdin; // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = function (key) {
  // code handling the key presses
  if (key === "\u0003") {
    console.log("Exiting Game...");
    process.exit();
  }
  //explicitly state if conditions so that if by mistake user hits a key not present in either objects the program won't crash
  if (MOVE_KEYS[key]) {
    connection.write(MOVE_KEYS[key]);
  } else if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }
};

module.exports = setupInput;
