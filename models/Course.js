const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name of the course is requried']
    },
    creator: {
        type: String,
        required: [true, 'Name of Creator is requried']
    },
    source: {
        type: String,
        required: [true, 'Source of the course is requried']
    },
    link: {
        type: String,
        required: [true, 'Link to the course is requried']
    }
});

module.exports = mongoose.model('Course', CourseSchema);