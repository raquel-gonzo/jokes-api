const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

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
    Joke.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.post("/api/jokes/new", (req, res) => {
    Joke.create(req.body)
    .then((data) => res.json({ success: data}))
    .catch(err => res.json({"error": err}));
});

app.listen(8000, () => console.log("Listening on port 8000"));