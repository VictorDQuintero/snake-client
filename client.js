const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Succesfully connected to game server");
  });

  // set the encoding on standard in
  process.stdin.setEncoding("utf-8");

  // listen for information coming from standard in (terminal)
  process.stdin.on("data", (data) => {
    console.log("Name: ", data);

    // send the information to the server
    conn.write(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};
module.exports = connect;
