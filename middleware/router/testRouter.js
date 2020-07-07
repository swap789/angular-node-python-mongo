const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const spawn = require("child_process").spawn;

router.get("/", (req, res, next) => {
  var dataToSend;

  const python = spawn("python", ["../backend/app.py"]);
  python.stdout.on("data", function (data) {
    dataToSend = data.toString();
    return res.send(dataToSend);
  });
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
  });

  return res.status(200).json({ test: "hello world" });
});

module.exports = router;
