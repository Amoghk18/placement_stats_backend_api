const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    companyName: {
        type: String,
        required: [true, 'Company Name is required'],
        trim: true
    },
    position: {
        type: String,
        required: [true, 'Position is required'],
        trim: true
    },
    ctc: {
        type: Number,
        required: [true, 'CTC/Stipend is required'],
    },
    experience: {
        type: String,
        required: [true, 'Experience is required'],
        maxlength: [500, 'Experience cannot exceed 250 characters']
    },
    interviewProcess: {
        type: String,
        required: [true, 'Interview Process is required'],
        maxlength: [500, 'Interiew Process cannot exceed 250 characters']
    },
    suggestions: {
        type: String,
        required: false,
        maxlength: [500, 'Suggestions cannot exceed 250 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Experience', ExperienceSchema);