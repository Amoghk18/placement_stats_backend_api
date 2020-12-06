const mongoose = require('mongoose');

const SuccessStorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name of the person is required']
    },
    college: {
        type: String,
        required: [true, 'Nam of the college is required']
    },
    company: {
        type: String,
        required: [true, 'Company name is required']
    },
    package: {
        type: String,
        required: [true, 'Package/Salary is required']
    },
    contact: {
        type: String,
        required: [true, 'Contact/Mail id is required']
    },
    haveCopied: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('SuccessStory', SuccessStorySchema);