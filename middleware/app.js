const express = require("express");
const bodyParser = require("body-parser");
const testRouter = require("./router/testRouter");

// const mongoose = require("mongoose");
const app = express();
const path = require("path");

const router = express.Router();

// const subjectRouter = require("./routes/subjects");
// const topicRouter = require("./routes/topics");

// mongoose
//   .connect(
//     "mongodb+srv://Swapnil:9ivsuepEmov9db8n@cluster0-dqrjx.mongodb.net/tutorials"
//   )
//   .then(() => {
//     console.log("connected to database"); //connection established.
//   })
//   .catch(() => {
//     console.log("connection Failed");
//   });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/test", testRouter);

// app.use("/api/subjects", subjectRouter);
// app.use("/api/topics", topicRouter);
module.exports = app;
