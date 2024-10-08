const mongoose = require('mongoose');

// Define the user schema
const issueSchema = new mongoose.Schema({
    issuetype: {
        type: String,
        required: true,
        unique: true,  // Ensure unique usernames
    },
    loaction: {
        type: String,
        required: true,
    },
    image : {
        type: String,
        required : true,
    }
});

// Create the model
const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
