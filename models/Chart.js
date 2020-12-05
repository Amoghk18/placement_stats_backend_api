const mongoose = require('mongoose');

const ChartSchema = new mongoose.Schema({
    chartTitle: {
        type: String,
        required: [true, 'Chart title is required'],
    },
    XaxisType: {
        type: String,
        required: [true, 'Type of X-axis is required']
    },
    YaxisType: {
        type: String,
        required: [true, 'Type of Y-axis is required']
    },
    XaxisInterval: {
        type: String,
        required: [true, 'Type of X-axis interval is required']
    },
    YaxisInterval: {
        type: String,
        required: [true, 'Type of Y-axis interval is required']
    },
    XaxisName: {
        type: String,
        required: [true, 'Name of X-axis is required']
    },
    YaxisName: {
        type: String,
        required: [true, 'Name of Y-axis is required']
    },
    seriesType: {
        type: String,
        required: [true, 'Type of Series is required']
    },
    chartType: {
        type: String,
        required: [true, 'Type of Chart is required']
    },
    seriesName: {
        type: String,
        required: [true, 'Name of Series is required']
    },
    chartDesc: {
        type: String,
        required: [true, 'Chart description is required']
    },
    dataSource: {
        type: Map,
        required: [true, 'Data Source is required']
    }
});

module.exports = mongoose.model('Chart', ChartSchema);