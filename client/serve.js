const express = require("express");
const path = require("path");

const app = express();

// Server static asses in production
// Set static folder
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("build"));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "build", "index.html"))
);

// Node connection
const hostname = "0.0.0.0";
const PORT = process.env.PORT || 3000;

app.listen(PORT, hostname, () => {
  console.log(`Listening on ${hostname} 
Waiting for connections on ${PORT} 
Client started.`);
});
