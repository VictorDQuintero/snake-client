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

  // for (const mover in MOVE_KEYS) {
  //   if (key === MOVE_KEYS[mover][0]) {
  //     connection.write(MOVE_KEYS[mover][1]);
  //     break;
  //   }
  // }

  // for (const mover in MOVE_KEYS) {
  //   if (key === MOVE_KEYS[mover].letter) {
  //     connection.write(MOVE_KEYS[mover].command);
  //   }
  // }
  connection.write(MOVE_KEYS[key]);

  for (const talker in MESSAGES) {
    if (key === MESSAGES[talker].letter) {
      connection.write(MESSAGES[talker].message);
    }
  }

  /* 
  if (key === "w") {
    connection.write("Move: up"); // connection object can be used here because it is in global scope
  }
  if (key === "a") {
    connection.write("Move: left");
  }

  if (key === "s") {
    connection.write("Move: down");
  }

  if (key === "d") {
    connection.write("Move: right");
  } */

  // if (key === "l") {
  //   connection.write("Say: LOL");
  // }
  // if (key === "g") {
  //   connection.write("Say: Gotcha!");
  // }
  // if (key === "n") {
  //   connection.write("Say: Noooo!");
  // }

  // if user presses CTRL + C, then the program terminates
  if (key === "\u0003") {
    console.log("Exiting Game...");
    process.exit();
  }
};

module.exports = setupInput;
