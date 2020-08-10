const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
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
};