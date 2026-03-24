const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    age: {
        type: Number,
        min: 0,
        max: 120
    }
}, {
    timestamps: true
});

// Normalize name formatting before save.
userSchema.pre('save', function (next) {
    if (this.name) {
        this.name = this.name.replace(/\s+/g, ' ').trim();
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
