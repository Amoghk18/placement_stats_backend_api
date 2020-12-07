const mongoose = require('mongoose');

const ProcessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name of the company is required']
    },
    year: {
        type: String,
        required: true
    },
    jd: {
        type: String,
        required: [true, 'Job Description is required']
    },
    eligibilityCriteria: {
        type: String,
        required: [true, 'Eligibility Criteria is required']
    },
    duration: {
        type: String,
        required: [true, 'Duration is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    stipendOrCtc: {
        type: String,
        required: [true, 'Stipend/CTC is required']
    },
    process: {
        type: String,
        required: [true, 'Process is required']
    },
    rounds: {
        type: String,
        required: [true, 'Rounds is required']
    }
});

module.exports = mongoose.model('Process', ProcessSchema);