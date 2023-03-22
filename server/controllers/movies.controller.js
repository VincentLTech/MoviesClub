const Movie = require('../models/movie.model');
const jwt = require('jsonwebtoken');
const SECRET = "NOTSOSECRET"
const User = require('../models/user.model');

module.exports = {
    getAll: (req, res) => {
        Movie.find()
            .populate('creator', 'first last ')
            .then(e => res.json(e))
            .catch(e => res.status(400).json({ message: 'something went wrong in find all movies', error: e }));
    },

    getByUser: (req, res) => {
        const user = jwt.verify(req.cookies.userToken, SECRET);
        Movie.find({ creator: user._id })
            .populate('creator', 'first last ')
            .then(e => res.json(e))
            .catch(e => res.status(400).json({ message: 'problem finding movie by user', error: e }))
    },

    create: (req, res) => {
        const user = jwt.verify(req.cookies.userToken, SECRET);
        Movie.create({ ...req.body, creator: user })
            .then(e => res.status(201).json(e))
            .catch(err => {
                console.log('Create Movie error', err);
                res
                    .status(400)
                    .json({ message: 'problem in create movie', errors: err.errors });
            });
    },

    update: (req, res) => {
        Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(e => res.json(e))
            .catch(e => res.status(400).json( {message: 'problem in update movie', errors: e.errors } ));
    },

    delete: (req, res) => {
        Movie.deleteOne({ _id: req.params.id })
            .then( e => res.json(e) )
            .catch( e => res.status(400).json( {message: 'problem in delete movie', error: e } ));
    }

};