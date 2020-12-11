const asyncHandler = require("../middleware/async");
const Process = require("../models/Process");
const CompanyYear = require("../models/CompanyYears");

// @desc        get a process, given company name and a year
// @route       GET  /api/v1/process
// @access      student only
exports.getProcess = asyncHandler(async (req, res, next) => {
  const process = await Process.findOne({ name: req.params.name, year: req.params.year });
  res.status(200).json({
    success: true,
    data: process,
  });
});

// @desc        create a process
// @route       POST  /api/v1/process
// @access      recruiter only
exports.createProcess = asyncHandler(async (req, res, next) => {
  const company = await CompanyYear.findOne({ company: req.body.name });
  if (company) {
    await CompanyYear.update(
      { company: req.body.name },
      { years: [...company.years, req.body.year] }
    );
  } else {
    await CompanyYear.create({
      company: req.body.name,
      years: [req.body.year],
    });
  }
    const process = await Process.create(req.body);
    res.status(201).json({
        success: true,
        data: process
    });
});