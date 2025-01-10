const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    res.send("Hello from the server at port 5000")
})

app.use("/hello", (req, res) => {
    res.send("Hello helo hello hello")
})

app.listen(5000, () => console.log("server listening on 5000"));
