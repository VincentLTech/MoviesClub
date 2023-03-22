const CONTROLLER = require('../controllers/movies.controller')

module.exports = app  => {
    app.post('/api/movie', CONTROLLER.create)
    app.get('/api/movies', CONTROLLER.getAll)
    app.get('/api/movies/user', CONTROLLER.getByUser)
    app.put('/api/movie/:id', CONTROLLER.update);
    app.delete('/api/movie/:id', CONTROLLER.delete);
}