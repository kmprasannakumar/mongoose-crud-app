const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Mongoose connection
mongoose.connect('mongodb://localhost:27017/moviesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

// Movie model
const Movie = mongoose.model('Movie', {
    title: String,
    director: String,
    year: Number
});

// Routes
app.post('/movies', async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).send(movie);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

// Test GET route
app.get('/movies', async (req, res) => {
    const movies = await Movie.find();
    res.send(movies);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
