const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mongoose_crud_app';

let isDatabaseConnected = false;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', database: isDatabaseConnected ? 'connected' : 'disconnected' });
});

// If DB is unavailable, return a clear API message instead of connection refusal.
app.use('/api', (req, res, next) => {
    if (!isDatabaseConnected && req.path !== '/health') {
        return res.status(503).json({ error: 'Database unavailable. Try again in a moment.' });
    }
    next();
});

app.use('/api/users', userRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Centralized error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});

// Mongoose connection
mongoose.connect(MONGO_URI).then(() => {
    isDatabaseConnected = true;
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
