const IP = "localhost";
const PORT = 50541;
// const MOVE_KEYS = {
//   MOVE_UP_KEY: ["w", "Move: up"],
//   MOVE_DOWN_KEY: ["s", "Move: down"],
//   MOVE_LEFT_KEY: ["a", "Move: left"],
//   MOVE_RIGHT_KEY: ["d", "Move: right"],
// };
/* const MOVE_KEYS = {
  MOVE_UP_KEY:  { letter: "w", command: "Move: up" } ,
  MOVE_DOWN_KEY: { letter: "s", command: "Move: down" },
  MOVE_LEFT_KEY: { letter: "a", command: "Move: left" },
  MOVE_RIGHT_KEY: { letter: "d", command: "Move: right" },
}; */

const MOVE_KEYS = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right",
};

const MESSAGES = {
  MESSAGE1: { letter: "l", message: "Say: LOL" },
  MESSAGE2: { letter: "g", message: "Say: Gotcha!" },
  MESSAGE3: { letter: "y", message: "Say: Yum!" },
  MESSAGE4: { letter: "n", message: "Say: Nooo!" },
};

module.exports = {
  IP,
  PORT,
  MOVE_KEYS,
  MESSAGES,
};
