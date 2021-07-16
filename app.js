const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const url = require("./routes/url");

app.use(express.static("public"));
app.use(express.json());

//CORS
let allowAccessOrigin = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Acces-Contorl-Allow-Methods", "Content-Type", "Authorization");
  next();
};
app.use(allowAccessOrigin);

//App routes
app.use("/url", url);

//500 Error Handler
app.use((err, req, res, next) => {
  console.error(`{Error:- Something broke : ${err}}`);
  res
    .status(500)
    .json({ error: "Something Broke! Please try after sometime..." });
});

//404 Error Handler
app.use((req, res, next) => {
  console.error(`{Error:- Invalid path : ${req.originalUrl}}`);
  res.status(404).json({ error: "Path not found" });
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
