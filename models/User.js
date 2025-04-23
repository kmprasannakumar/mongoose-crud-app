const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        min: 0 // Ensure age cannot be negative
    }
});

// Add pre-save hook for additional validation or formatting, if needed
userSchema.pre('save', function (next) {
    // You can perform additional validation or modifications before saving the user
    next();
});

module.exports = mongoose.model('User', userSchema);
