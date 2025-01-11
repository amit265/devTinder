const express = require("express");

const app = express();

app.get("/hello", (req, res, next) => {
    console.log("1st response")
        next();

  res.send("Hello helo hello hello get");
},
(req, res) => {
    console.log("2nd response")

    res.send("everything get");
    
  });

app.post("/hello", (req, res) => {
  res.send("hello its amit post");
});

app.delete("/hello", (req, res) => {
    res.send("delete hello hello")
})

app.listen(5000, () => console.log("server listening on 5000"));
