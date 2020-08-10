const JokesController = require("../controllers/jokes.controller");
const Joke = require("../models/jokes.model");

module.exports = app => {

    app.post("/api/jokes/new", (req, res) => {
        Joke.create(req.body)
        .then((data) => res.json({ success: data}))
        .catch(err => res.json({"error": err}));
    });
    app.get("/api/jokes", (req, res) => {
        Joke.find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    });
    app.get("/api/jokes/:id", (req, res) => {
        Joke.findById(req.params.id)
        .then ((data) => res.json(data))
        .catch((err) => res.json(err));
    })
};