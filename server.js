const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/jokes-api")
.then(() => console.log("Established a connection to the database."))
.catch(err => console.log("Something went wrong when connecting to the database", err));

const JokeSchema = new mongoose.Schema(
   {
    question: String,
    punchline: String,
   }, 
    {timestamps: true}
);

const Joke = mongoose.model('Joke', JokeSchema);

app.get("/api/jokes", (req, res) => {
    Joke.find({}, (data) => {
        console.log(data);
    });
    // .then( data => res.json(data))
    // .catch((err) => res.json(err));
});

app.listen(8000, () => console.log("Listening on port 8000"));