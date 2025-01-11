const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express(); 

app.use(express.json());


app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.post("/signup", async (req, res) => {

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        gender: req.body.gender
    })

    await user.save().then(data => res.json(data))
    .catch(err => res.status(400).json(err));
    
})




connectDB().then(() => {
    console.log("Database connected successfully")
    app.listen(5000, () => console.log("server listening on 5000"));

})
.catch((err) => {
    console.error("Database cannot be connected", err)
})



