const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Succesfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: VDQ");
  });

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }),
  //     50;
  // });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};
module.exports = connect;
