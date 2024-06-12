// setup interface to handle user input from stdin

const setupInput = function () {
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

  // if user presses CTRL + C, then the program terminates
  if (key === "\u0003") {
    console.log("Exiting Game...");
    process.exit();
  }
};

module.exports = setupInput;