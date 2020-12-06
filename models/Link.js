const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name of the link is requried']
    },
    creator: {
        type: String,
        required: [true, 'Name of Creator is requried']
    },
    link: {
        type: String,
        required: [true, 'Link is requried']
    }
});

module.exports = mongoose.model('Link', LinkSchema);