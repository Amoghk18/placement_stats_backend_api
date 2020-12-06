const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title of the blog is required"]
    },
    author: {
        type: String,
        required: [true, "Name of the Author is required"]
    },
    link: {
        type: String,
        required: [true, "Link to the blog is required"]
    }
});

module.exports = mongoose.model('Blog', BlogSchema);