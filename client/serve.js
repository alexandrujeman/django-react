const express = require("express");
const path = require("path");

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Server static asses in production

// Set static folder
app.use(express.static("./build"));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "build", "index.html"))
);

// Node connection
const hostname = "0.0.0.0";
const PORT = process.env.PORT || 5000;

app.listen(PORT, hostname, () => {
  console.log(`Listening on ${hostname} 
Waiting for connections on ${PORT} 
Server started.`);
});
