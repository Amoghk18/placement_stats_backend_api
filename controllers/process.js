const asyncHandler = require("../middleware/async");
const Process = require("../models/Process");

// @desc        get a process, given company name and a year
// @route       GET  /api/v1/process
// @access      student only
exports.getProcess = asyncHandler(async (req, res, next) => {
  const process = await Process.findOne({ name: req.body.name, year: req.body.year });
  res.status(200).json({
    success: true,
    data: process,
  });
});

// @desc        create a process
// @route       POST  /api/v1/process
// @access      recruiter only
exports.createProcess = asyncHandler(async (req, res, next) => {
    const process = await Process.create(req.body);
    res.status(201).json({
        success: true,
        data: process
    });
});