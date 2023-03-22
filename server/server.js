const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('./config/mongoose.config')
require('dotenv').config()
app.use( express.json() )
app.use( express.urlencoded({extended:true}) )
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser())

const movieRoutes= require('./routes/movies.routes')
const userRoutes= require('./routes/users.routes')
movieRoutes(app)
userRoutes(app)
app.listen(8000, () => {console.log(`Server is running`)})
