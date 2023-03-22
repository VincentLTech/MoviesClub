const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'PLease add a title'],
            minlength: [2, 'The shortest title for a movie is called IT.'],
        },
        genre: {
            type: String,
            required: [true, 'Please add a genre'],
            minlength: [3, 'You need a legitamate Genre'],
        },
        creator: {
            type: mongoose.Schema.Types.ObjectId,////////////////////important
            ref: 'User',
        },
    },
    //
    {
        timestamps: true,
    },
);

const Movie = mongoose.model('movie', MovieSchema);
module.exports = Movie;