const connect = require("./client");
const setupInput = require("./input");

// establishes a connection with the game server

console.log("Connecting ...");
setupInput(connect()); // connect returns an object that can be used to interact with the server and it is passed to setupInput
// setupInput() places a reference to that object in another variable connection which is in a global scope of that module
