const Joke = require("../models/jokes.model");

// functions go here for the remaining of the assignment.
module.exports.getAllJokes = (req, res) => {
    Joke.find()
    .then()
    .catch()
};

module.exports.getOneJoke = (req, res) => {
    Joke.findOne()
    .then()
    .catch()
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then()
    .catch()
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findByIdAndUpdate()
    .then()
    .catch()
}

module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne()
    .then()
    .catch()
}