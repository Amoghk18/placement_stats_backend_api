const mongoose = require('mongoose');

const CompanyYearSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Company Name is required']
    },
    years: {
        type: Array,
        required: true
    },
    selected: {
        type: String,
        default: '-'
    }
});

module.exports = mongoose.model('CompanyYear', CompanyYearSchema);