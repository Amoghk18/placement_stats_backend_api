const mongoose = require('mongoose');

const EbookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name of the Ebook is requried']
    },
    author: {
        type: String,
        required: [true, 'Name of Author is requried']
    },
    link: {
        type: String,
        required: [true, 'Link to the Ebook is requried']
    }
});

module.exports = mongoose.model('Ebook', EbookSchema);