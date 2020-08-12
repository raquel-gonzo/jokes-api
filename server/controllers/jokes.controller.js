const Joke = require("../models/jokes.model");

// functions go here for the remaining of the assignment.
// CRUD operations
module.exports.getAllJokes = (req, res) => {
    Joke.find()         // returns promise
    .then((jokesArray) => {res.json(jokesArray)})             // name a package of data.
    .catch((err) => {res.json(err)})
};

module.exports.getOneJoke = (req, res) => {
    Joke.findOne((oneJoke))
    .then((oneJoke) => {res.json(jokesArray)})
    .catch((err) => {res.json(err)})
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then((createJoke) => {res.json(createJoke)})
    .catch((err) => {res.json(err)})
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body)
    .then((updateJoke) => {res.json(updateJoke)})
    .catch((err) => {res.json(err)})
};

module.exports.deleteExistingJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
    .then((deleteJoke) => {res.json(deleteJoke)})
    .catch((err) => {res.json(err)})
};