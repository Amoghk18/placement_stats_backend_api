const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name of the meet is requried']
    },
    datetime: {
        type: String,
        required: [true, 'Date and Time are required']
    },
    agenda: {
        type: String,
        required: [true, 'Agenda is required']
    },
    link: {
        type: String,
        required: [true, 'Link is requried']
    },
    isExpanded: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Schedule', ScheduleSchema);